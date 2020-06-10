const express = require('express');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');

//GET Routes
app.get('/', (req,res)=>{
  res.send('hello')
});

app.listen(PORT, ()=>{
  console.log(`Listening on port ${PORT}`);
});