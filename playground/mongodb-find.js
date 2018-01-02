const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
	if (err) {
		return console.log('Unable to connect to mongoDB server');
	}
	console.log('Connected to mongoDB server');
	
	// find == fetch every thing inside the Todo collection

//	db.collection('Todos').find().count().then((count)=> {
//		console.log(`Todos count: ${count}`);

//	}, (err)=> {
//		console.log('Unable to fetch todos', err);
//	})
	
	db.collection('Users').find({name: 'Abdallah'}).toArray().then((docs)=> {
	console.log(JSON.stringify(docs, undefined, 2));

	}, (err)=> {
		console.log('Unable to fetch todos', err);
	})
	

	
	
	//db.close();
})
