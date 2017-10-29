const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const Book = require('./models/Book');
const Author = require('./models/Author');
const _ = require('lodash');

mongoose.connect(
  'mongodb://127.0.0.1/test',
  { useMongoClient: true }
);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

app.use('/lib', express.static('lib'));
app.use('/build', express.static('build'));
app.use('/templates', express.static('templates'));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

function createAndSaveBook(req, res, author) {
  const book = new Book({
    name: req.body.bookName,
    author: author._id,
    isbn: req.body.isbn,
    summary: req.body.summary
  });

  book.save((err) => {
    if (err) {
      handleError(err);
    }
    res.send(book);
  });
}

function handleError(err) {
  const code = err.httpStatus || err.status || err.code || 500;
  res.status(code).send(err.message);
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/templates/index.html');
});

app.post('/books', (req,res) => {
  Book.findOne({ name: req.body.bookName })
  .then((book) => {
    if (!book) {
      Author.findOne({
        first_name: req.body.firstName,
        last_name: req.body.lastName
      }).exec().then((author) => {

        if (!author) {
          const author = new Author({
            first_name: req.body.firstName,
            last_name: req.body.lastName
          });

          author.save((err) => {
            if (err) { return err };
            createAndSaveBook(req, res, author)
          });

        } else {
          createAndSaveBook(req, res, author);
        }

      });
    } else {
      res.status(500).send('The book already exists!');
    }
  }, (err) => {
    handleError(err);
  });
});

app.get('/books', (req, res) => {
  Book.find({}).populate('author').exec()
  .then((books) => {
    res.send(books);
  }
  , (err) => {
    handleError(err);;
  });
});

app.delete('/books/:id', (req, res) => {
  id = mongoose.Types.ObjectId(req.params.id);
  Book.findOneAndRemove({ _id: id }).exec()
  .then((book) => {
    res.send(book);
  }, (err) => {
    handleError(err);
  });
});

