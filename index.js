const express = require('express');

// Inicializamos express
const app = express();

//Establecemos el puerto
app.set('port', process.env.PORT || 4000);

// Routes
app.use(require('./routes/routes'));

//Iniciamos el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});