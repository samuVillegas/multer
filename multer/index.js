const multer = require('multer');
const uuid = require('uuid/v4');
const path = require('path');

//Configuración ubicación de carpeta donde subir archivos y el nombrado de los mismos
const storage = multer.diskStorage({
    //Creamos la carpeta si no existe
    destination: path.join(__dirname, '../public/upload'),
    filename: (req, file, cb) => {
        cb(null, uuid() + path.extname(file.originalname));
    }
});

//Configuración de limites y cantidad de archivos y configuraciones extra
const updloadFile = multer({
    storage,
    limits: {
        fileSize: 10000000
    }
}).single('image');

module.exports = updloadFile;