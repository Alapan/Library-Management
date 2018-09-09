const express = require('express');
const app = express();
const bodyParser = require('body-parser');

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

const modules = [
  'user',
  'book'
];

modules.map((m) => require(`./server/${m}.js`)(app));
