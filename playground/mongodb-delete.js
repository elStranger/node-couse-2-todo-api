const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
	if (err) {
		return console.log('Unable to connect to mongoDB server');
	}
	console.log('Connected to mongoDB server');
	
	//deleteMany
//	db.collection('Users').deleteMany({text: 'eat lunch'}).then((result)=>{
//		console.log(result);
//	});



	//deleteOne
//	db.collection('Users').deleteOne({text: 'eat lunch'}).then((result)=>{
//		console.log(result);
//	})	


	//findoneAndDelete
//	db.collection('Users').findOneAndDelete({completed: false}).then((result)=>{
//		console.log(result);
//	})
//	db.collection('Users').deleteMany({name:'Abdallah'});

	db.collection('Users').findOneAndDelete({
		_id: new ObjectId("5a4bb0b612aa2256a86fa405")
	}).then((result) =>{
		console.log(JSON.stringify(results, undefined, 2));
	})
	
	//db.close();
})
