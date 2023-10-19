//transpilar 
// EcmaScript ES modules 
// **import express from "express"
// CommonJS: const express = require("express")
const express = require("express")
<<<<<<< HEAD
=======
import router from './src/routes';
>>>>>>> ea12597 (Clase18Oct)

const app = express();

const example = function(){
    console.log("estoy a la escucha");
}

<<<<<<< HEAD
app.listen(
    9000, example
)
=======
router(app);

app.listen(
    9000, example
)
>>>>>>> ea12597 (Clase18Oct)
