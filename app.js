const express = require('express');
const path = require ('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
});


// Ruta para manejar la solicitud POST del formulario
app.post('/submit-form', (req, res) => {
    // Aquí puedes procesar los datos del formulario
    // Luego, redirige a la página index.html
    res.redirect('/');
  });


app.listen(3030, () => 
    console.log("Servidor corriendo"))
    
    