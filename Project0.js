const char_pic = document.getElementById('char_pic');
const submit = document.getElementById('submit');
const random = document.getElementById('random');
var gryfChars = new Array();
var slytChars = new Array();
var huffChars = new Array();
var raveChars = new Array();

submit.addEventListener('click', getChar);
random.addEventListener('click', randomChar);

fetch('http://hp-api.herokuapp.com/api/characters/house/gryffindor')
.then(result => result.json()).then(data => gryfChars = data);
fetch('http://hp-api.herokuapp.com/api/characters/house/slytherin')
.then(result => result.json()).then(data => slytChars = data);
fetch('http://hp-api.herokuapp.com/api/characters/house/hufflepuff')
.then(result => result.json()).then(data => huffChars = data);
fetch('http://hp-api.herokuapp.com/api/characters/house/ravenclaw')
.then(result => result.json()).then(data => raveChars = data);

window.onload = (event) => { //make Harry Potter the default character when page is loaded

};

gryfChars.forEach(element => JSON.parse()) //parse each one and put it in the table somehow tbd

function getChar() {

}

function randomChar() {

}