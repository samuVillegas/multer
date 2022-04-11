const express = require('express'); 
const router = express.Router();
const updloadFile = require('../multer/index')

router.post('/images/upload', (req, res) => {
    updloadFile(req, res, (err) => {
        if (err) {
            err.message = 'Error al cargar el archivo.';
            return res.send(err);
        }
        if(req.file) console.log(req.file)
        else if(req.files) console.log(req.files)
        res.send('Imagen cargada!');
    });
});

module.exports = router;

