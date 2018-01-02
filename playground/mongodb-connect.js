const MongoClient = require('mongodb').MongoClient;
// same as -->
//const {MongoClient, ObjectId} = require('mongodb');

var user = {name: 'tom', age: 25}

var {name} = user ;

console.log(name);

/*
 *
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
	if (err) {
	return console.log('Unable to connecte to mongoDB server');

	} 
	console.log('Connected to mongoDB server');
	
	//insert new document in the collection (insertOne);
	//
	db.collection('Todos').insertOne({
		text: 'Something to do',
		completed: false
	}, (err, result) => {
		if (err) {
			return console.log('Unable to insert todo', err);
		}

		console.log(JSON.stringify(result.ops, undefined, 2));
	})
*
* 

	//insert new doc into Users (name,age,location)
	db.collection('Users').insertOne({
		_id: 1,
		name: 'Abdallah',
		age: '-7 mois',
		location: 'barzakh'
	}, (err, result)=>{
		if (err) {
			return console.log('Unable to locate barzakh in earth', err);

		}
		console.log(result.ops[0]._id.getTimestamp());

	
	})
	db.close();

});*/
	
