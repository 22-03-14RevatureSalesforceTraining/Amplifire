const char_pic = document.getElementById('char_pic');
const char_info = document.getElementById('char_info');
const submit = document.getElementById('submit');
const random = document.getElementById('random');
var gryfChars = new Array();
var slytChars = new Array();
var huffChars = new Array();
var raveChars = new Array();
var characters = new Array();

submit.addEventListener('click', getChar);
random.addEventListener('click', randomChar);

async function fetchChars() {
    response = await fetch('http://hp-api.herokuapp.com/api/characters/house/gryffindor');
    gryfChars = await response.json();
    response = await fetch('http://hp-api.herokuapp.com/api/characters/house/slytherin');
    slytChars = await response.json();
    response = await fetch('http://hp-api.herokuapp.com/api/characters/house/hufflepuff');
    huffChars = await response.json();
    response = await fetch('http://hp-api.herokuapp.com/api/characters/house/ravenclaw');
    raveChars = await response.json();
    characters = gryfChars.concat(slytChars, huffChars, raveChars);
    return characters;
}

window.onload = (event) => { //make Harry Potter the default character when page is loaded
    fetchChars().then(characters => {
        char_pic.innerHTML = '<img src=\"'+characters[0].image+'"/>';
        char_name.innerHTML = characters[0].name;
        var detail;
        for (const key in characters[0]) {
            detail = document.createElement('li');
            detail.appendChild(document.createTextNode(`${key}: ${characters[0][key]}`));
            char_info.appendChild(detail);
        }
    })
};

function getChar() {
    
}

function randomChar() {

}