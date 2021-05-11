const express = require('express')
const cors = require('cors')

var serialport = require("serialport");

const app = express()
const port = 3000

const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
    ],
  
    allowedHeaders: [
      'Content-Type',
    ],
  };
  
  app.use(cors(corsOpts));
  app.set("view engine", "ejs");
  app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render("login");
})

app.get('/request', (req, res) => {    
    console.log('DATAAAA',req.query);
    res.status(200).send('SUCCESS');
  })

  //Showing login form
app.get("/login", function (req, res) {
    res.render("login");
});

app.get("/settings", function (req, res) {
    res.render("settings");
});

app.get("/listserialport", function (req, res) {   
// list serial ports:
try{
serialport.list().then(ports => {
    console.log('INSIDE SerialPort Listing');
 
    ports.forEach(function(sport) {
      console.log(sport.path);
      console.log(sport.pnpId);
      console.log(sport.manufacturer);
    });
   
  });
}catch(ex){
    console.log('EXCEPIONNNN:=',ex);
}

});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})