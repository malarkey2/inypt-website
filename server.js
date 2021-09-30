const express = require('express');
const app = express();


//MIDDLEWARE
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/rules', (req, res)=>{
  res.render('rules');
})

app.get('/about', (req, res)=>{
  res.render('about');
})

app.get('/', (req, res) => {
  res.render('index');
});


const PORT = process.env.PORT || 4000; 
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));