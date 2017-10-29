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

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/templates/index.html');
});

app.post('/books', (req,res) => {

  Book.findOne({ name: req.body.bookName })
  .then((book) => {
    if (!book) {
      const author = new Author({
        first_name: req.body.firstName,
        last_name: req.body.lastName
      });

      author.save((err) => {
        if (err) { return err };

        const book = new Book({
          name: req.body.bookName,
          author: author._id,
          isbn: req.body.isbn,
          summary: req.body.summary
        });

        book.save((err) => {
          if (err) { return err };
          res.send(book);
        });
      });
    } else {
      res.status(500).send('The book already exists!');
    }
  }, (err) => {
    res.status(500).send('Something went wrong went reading books');
  });
});

app.get('/books', (req, res) => {
  Book.find({}).populate('author').exec()
  .then((books) => {
    res.send(books);
  }
  , (err) => {
    console.log('Error in getting books: ', err.toString());
  });
});
