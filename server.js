const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const app = express();
const path =require('path')

// app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", function (req, res) {
//     res.sendFile(__dirname + '/index.html');
// });

// app.post('/quotes', (req, res) => {
//     quotesCollection.insertOne(req.body)
//       .then(result => {
//         console.log(result)
//       })
//       .catch(error => console.error(error))
//   })
let client = {}
MongoClient.connect("mongodb://localhost/qoutes", { useUnifiedTopology: true })
  .then(function (c) {
    // if (err) return console.error(err)
    client = c
    console.log("Connected to Database");

    const db = client.db("To-Do-List");
    const quotesCollection = db.collection("quotes");

    app.set("view engine", "ejs");

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static(path.join(__dirname,"public")))
    app.use(bodyParser.json());

    // app.get("/", function (req, res) {
    //   const cursor = db
    //     .collection("quotes")
    //     .find()
    //     .toArray()
    //     .then((results) => {
    //       res.render("./views/index.ejs", { quotes: results });
    //       console.log(results);
    //     })
    //     .catch((error) => console.error(error));
    //   //res.sendFile(__dirname + '/index.html');
    // });

    app.post("/quotes", (req, res) => {
      quotesCollection
        .insertOne(req.body)
        .then((result) => {
        })
        .catch((error) => console.error(error));
    });
  })
  .catch(console.error);

app.listen(3000, function () {
  console.log("listening on 3000");
});

app.get("/quotes", (req, res) => {
  console.log(req.body);
  const db = client.db("To-Do-List");

  const cursor = db
      .collection("quotes")
      .find()
      .toArray()
      .then((results) => {
        res.send(results)
        console.log(results);
    })
});
