main().catch(console.error);

async function main() {
    console.log('Server-side code running');

    const express = require('express');
    const app = express();

    // serve files from the public directory
    app.use(express.static('public'));

    const MongoClient = require('mongodb').MongoClient;
    const uri =
      'mongodb+srv://LuDO:Rath01gar@gettingstarted.ooalv.mongodb.net/?retryWrites=true&w=majority';
    const client = new MongoClient(uri, { useNewUrlParser: true });
    await client.connect();

    const db = client.db('clicks');

    app.listen(8080, () => {
        console.log('listening on 8080');
      });
    
    // serve the homepage
    app.get('/', (req, res) => {
      res.sendFile(__dirname + '/index.html');
    });

    app.post('/clickedredadd', (req, res) => {
      const click = {clickTime: new Date()};
      var color = {color: "red"}
      db.collection('clicks').updateOne(color, {$inc: {count: 1}}, (err, result) => {
        if (err) {
          return console.log(err);
        }
        console.log('red click added to db');
        res.sendStatus(201);
      });
    });

    app.post('/clickedredsubtract', (req, res) => {
      const click = {clickTime: new Date()};
      var color = {color: "red"}
      db.collection('clicks').updateOne(color, {$inc: {count: -1}}, (err, result) => {
        if (err) {
          return console.log(err);
        }
        console.log('red click subtracted from db');
        res.sendStatus(201);
      });
    });
    
      app.post('/clickedgreenadd', (req, res) => {
        const click = {clickTime: new Date()};
        var color = {color: "green"}
        db.collection('clicks').updateOne(color, {$inc: {count: 1}}, (err, result) => {
          if (err) {
            return console.log(err);
          }
          console.log('green click added to db');
          res.sendStatus(201);
        });
      });

      app.post('/clickedgreensubtract', (req, res) => {
        const click = {clickTime: new Date()};
        var color = {color: "green"}
        db.collection('clicks').updateOne(color, {$inc: {count: -1}}, (err, result) => {
          if (err) {
            return console.log(err);
          }
          console.log('green click subtracted from db');
          res.sendStatus(201);
        });
      });

      app.post('/clickedblueadd', (req, res) => {
        const click = {clickTime: new Date()};
        var color = {color: "blue"}
        db.collection('clicks').updateOne(color, {$inc: {count: 1}}, (err, result) => {
          if (err) {
            return console.log(err);
          }
          console.log('blue click added to db');
          res.sendStatus(201);
        });
      });

      app.post('/clickedbluesubtract', (req, res) => {
        const click = {clickTime: new Date()};
        var color = {color: "blue"}
        db.collection('clicks').updateOne(color, {$inc: {count: -1}}, (err, result) => {
          if (err) {
            return console.log(err);
          }
          console.log('blue click subtracted from db');
          res.sendStatus(201);
        });
      });
      // get the click data from the database
    app.get('/clicks', (req, res) => {

    db.collection('clicks').find().toArray((err, result) => {
      if (err) return console.log(err);
      res.send(result);
    });
    });



  }