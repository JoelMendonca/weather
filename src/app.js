const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

const publicPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.use(express.static(publicPath));

app.set('view engine', 'hbs');
app.set('views', viewsPath);

hbs.registerPartials(partialsPath);

app.get('', (req, res) => {
    console.log(req.query);
    res.render('index', {
        title:'Weather App',
        nome: "Joel Mendonça"
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Weather App | About',
        heading1: 'Sobre a nossa aplicação',
        nome: "Joel Mendonça"
    });
});

app.get('*', (req, res) => {
    res.render('404', {});
});

app.listen(3000, () => {
    console.log('O servidor iniciou');
});



