// const express = require('express');
// const bodyParser = require('body-parser');
// const MongoClient = require('mongodb').MongoClient;
// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }))


// app.get("/", (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// })

// app.post('/quotes', (req, res) => {
//     console.log(req.body);
// })

// MongoClient.connect('mongodb+srv://sameer:primesam1s@cluster0.8dfo7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useUnifiedTopology: 
// true}) 
//     .then(client => { 
//     // if (err) return console.error(err)
//         console.log('Connected to Database')
//         const db = client.db('To-Do-List')
//         const quotesCellection = db.collection([])
//         app.use(/* ... */)
//         app.get(/* ... */)
//         app.post(/* ... */)
//         app.listen(/* ... */)
//     })
//     .catch(console.error)

// app.listen(3000, function(){
//     console.log('listening on 3000');
// })