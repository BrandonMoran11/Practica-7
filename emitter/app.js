// var Emitter = require('../emitter');
var Emitter = require('events');
const config = require('./config.js');
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