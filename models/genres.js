var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var genresSchema = new Schema({
	name: String,
})

mongoose.model('genres',genresSchema)