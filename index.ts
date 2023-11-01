//transpilar 
// EcmaScript ES modules 
// **import express from "express"
// CommonJS: const express = require("express")
const express = require("express")
import routes from './src/network';


const server = express();
routes(server)

const example = function(){
    console.log("estoy a la escucha");
}

server.listen(
    9000, example
)




