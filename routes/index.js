var express = require('express');
var router = express.Router();
// *** DB with original MongoDB
// var mongo = require('mongodb').MongoClient;
// var objectId = require('mongodb').ObjectID;
// var assert = require('assert');
// *** DB with original MongoDB
// *** DB with Monk MongoDB
// var db = require('monk')('localhost:27017/roberttest');
// var tableData = db.get('tableone');
// *** DB with Monk MongoDB
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('localhost:27017/roberttest');

var userDataSchema = new Schema({
	title: {type: String, required: true},
	content: String,
	author: String
},{collection: 'tableone'})

var UserData = mongoose.model("UserData", userDataSchema)

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: "Robert's Express" });
// });

// *** DB with original MongoDB
// var url = 'mongodb://localhost:27017/roberttest';
// *** DB with original MongoDB

router.get('/',function(req, res, next){
	res.render('index')
})

router.get('/tableone',function(req,res,next){
	
	UserData.find()
		.then(function(doc){
			res.render('index',{items: doc})
		})

	// *** DB with Monk mongodb
	// tableData.find({},'tableone').then(function(docs){
	// 	res.render("index",{"items":docs})
	// });

	// data.on('success', function(docs) {
	// 	res.render('index', {items: docs});
	// });
	// *** DB with Monk MongoDB

	// *** DB with original MongoDB
	// var resultArray = [];
	// mongo.connect(url, function(err,db){
	// 	assert.equal(null, err)
	// 	var cursor = db.collection('tableone').find();
	// 	cursor.forEach(function(doc, err){
	// 		assert.equal(null, err);
	// 		resultArray.push(doc);
	// 	},function(){
	// 		db.close()
	// 		res.render('index',{"items": resultArray})
	// 	})
	// })
	// *** DB with original MongoDB
})

// router.post('/insert', function(req, res, next) {
//   var item = {
//     title: req.body.title,
//     content: req.body.content,
//     author: req.body.author
//   };

//   var data = new UserData(item);
//   data.save();

//   res.redirect('/');
// });

// router.post('/update', function(req, res, next) {
//   var id = req.body.id;

//   UserData.findById(id,function(err, doc){
//   	if(err){
//   		console.log('error, no entry found')
//   	}
//   	doc.title = req.body.title;
//   	doc.content = req.body.content;
//   	doc.author = req.body.author
//   	doc.save();
//   })
// });

// router.post('/delete',function(res,res,next){
// 	var id = req.body.id;
// 	UserData.findByIdAndRemove(id).exec();
// 	res.redirect('/');
// })

module.exports = router;
