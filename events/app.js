let obj = {
    nombre: "Brandon",
    edad: 20,
    apellido: "Moran",
    keypress: function () {
        return 'se ha presionado una tecla';
    },
    mouseOver: function () {
        return 'El puntero del mouse esta arriba';
    }
} 
console.log(obj.nombre);
console.log(obj['nombre']);

let myKey = "nombre";
console.log(obj[myKey]);

myKey = 'keypress';
console.log(obj[myKey]());


myKey = 'mouseOver';
console.log(obj[myKey]());  

let myArray = [];

myArray.push(4);
myArray.push('una cadena');
myArray.push(obj);
myArray.push(function () {
    return "Hola desde el array";
});

console.log(myArray);
console.log(myArray[2].keypress());// como el objeto esta en la posicion 2 del array 
//se manda a imprimir la segunda posicion y como la segunda posicion es un objeto tambien tiene atributos por lo que se manda a llamar el atributo .keypress
console.log(myArray[3]());//en este caso como la tercera posicion es una funcion anonima o fantasma solo se manda a llamar el indice donde esta esta funcion y con sus respectivos parentesis


let funcArray = [];

funcArray.push(() =>{
    return "Function 1";
});


funcArray.push(() =>{
    return "Function 2";
});

funcArray.push(() =>{
    return "Function 3";
});

funcArray.forEach((item) =>{
    console.log(item());
})

// var Emitter = require('../emitter');
var Emitter = require('events');
const config = require('../config.js');
var emtr = new Emitter();

emtr.on(config.events.GREET, ()=> {
    console.log('Somwhere, someone said hello');
});

emtr.on('greet', ()=> {
    console.log('A greeting ocurred!');
});

console.log('Hello!');
emtr.emit('greet!');

emtr.on('jump', ()=> {
    console.log('Someone jumped!');
});

console.log(emtr);
emtr.emit('jump');