const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Book = require('./models/Book');

mongoose.connect('mongodb://127.0.0.1/test', { useMongoClient: true});

app.listen(3000, () => {
	console.log('Listening on port 3000');
})

app.use('/lib', express.static('lib'));
app.use('/js', express.static('js'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
})
