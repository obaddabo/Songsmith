const express = require('express');
const app = express(); 
const openai = require('openai')
const formidable = require('formidable')
const uid = require('uid');
const {Essentia , EssentiaWASM} = require ('essentia.js')
const essentia = new Essentia(EssentiaWASM);
const fs = require('fs');
const port = process.env.PORT ;






app.set('view engine', 'ejs');
app.set('views', 'views');
app.set(express.static('public'));



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });




app.get('/', (req,res)=>{

res.send('hello world');

});

app.post('/upload', upload.single('audio'), (req, res) => {
  res.send('Audio file uploaded successfully');
});


app.listen(3000, ()=> console.log('hello world'));

