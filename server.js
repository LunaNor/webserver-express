const express = require('express');
const app = express();

var hbs = require('hbs');
require('./hbs/helpers');

/* Asignamos el puerto */
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

/* Express HBS engine */
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs');



app.get('/', (req, res) => {

    res.render('home', { //renderizamos (mostramos) nuestra pagina home
        nombre: 'nicoLas'
    });

});


app.get('/about', (req, res) => {

    res.render('about'); //renderizamos (mostramos) nuestra pagina about

});
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});