const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
	if (err) {
		return console.log('Unable to connect to mongoDB server');
	}
	console.log('Connected to mongoDB server');
	

	//update the database
	
//	db.collection('Todos').findOneAndUpdate({
//		_id: new ObjectId('5a4bacd56fd71f542d32f932')
//
//	}, {
//		$set: {
//			completed: true
//		}
//	}, {
//		returnOriginal: false
//
	//
	//}).then((result)=> {
	//	console.log(result);
//	});

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectId('5a4bb260f7cc6d579284fae1')

	}, {
		$set: {
			name: 'Zeiv'
		},
		$inc: {
			age:1
		}
	}, {
		returnOriginal: false

	}).then((result)=> {
		console.log(result);
	});

	//db.close();
})
