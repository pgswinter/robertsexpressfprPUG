var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var booksSchema = new Schema({
	title: String,
	genre: {
		type: String,
		ref: 'genres'
	}
})

mongoose.model('books',booksSchema)