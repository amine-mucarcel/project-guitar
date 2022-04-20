const express = require('express');
const app = express();

const path = require('path'); 

const publicPath = path.resolve (__dirname,'./public');
app.use(express.static(publicPath)); 

app.use(express.static('src/public'));
app.use(express.static('src/public/images/american-ultra-sc'));
app.use(express.static('src/public/css'));

app.get('/',(req,res) => { //localhost:3000
    res.send('Hola muchaches'); 
    });

app.listen(3000,() => {
console.log('Servidor corriendo en el puerto 3000');
});

app.get('/product',(req,res) => { //localhost:3000/product
    res.status(200).sendFile(path.join(__dirname,'views/product.html')); 
    });