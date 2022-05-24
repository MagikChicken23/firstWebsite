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

    app.post('/clicked/:color/:operator', (req, res) => {
      let dbcolor = {color:req.params["color"]}
      let operator = req.params['operator']
      if(operator == "add"){
        db.collection('clicks').updateOne(dbcolor, {$inc: {count: 1}}, (err, result) => {
          if (err) {
            return console.log(err);
          }
          console.log(color,' click added to db');
          res.sendStatus(201);
        });
        
      }else{
        db.collection('clicks').updateOne(dbcolor, {$inc: {count: -1}}, (err, result) => {
          if (err) {
            return console.log(err);
          }
          console.log(color,' click subtracted from db');
          res.sendStatus(201);
        });
      }
    });



      // get the click data from the database
    app.get('/clicks', (req, res) => {

    db.collection('clicks').find().toArray((err, result) => {
      if (err) return console.log(err);
      res.send(result);
    });
    });
  }