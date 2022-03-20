const char_pic = document.getElementById('char_pic');
const char_info = document.getElementById('char_info');
const submit = document.getElementById('submit');
const random = document.getElementById('random');
var gryfChars, slytChars, huffChars, raveChars, characters = new Array();

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
        getChar("Harry Potter");
        createTable();
    })
};

function createTable() {
    var tbl = document.getElementById("char_house");
    var tblBody = document.getElementById("tbl_body");
    var row, cell, cellText;
    var gryfEnd, slytEnd, huffEnd, raveEnd = false;
    var i = 0;

    while(!(gryfEnd && slytEnd && huffEnd && raveEnd)){ //columns
        row = document.createElement("tr");

        for (var j=0; j < 4; j++){  //rows
            cell = document.createElement("td");
            cellText = document.createTextNode("t");
            if (j == 0 && !gryfEnd)
                cellText = document.createTextNode(gryfChars[i].name);
            else if (j == 1 && !slytEnd)
                cellText = document.createTextNode(slytChars[i].name);
            else if (j == 2 && !huffEnd)
                cellText = document.createTextNode(huffChars[i].name);
            else if (j == 3 && !raveEnd)
                cellText = document.createTextNode(raveChars[i].name);
            else
                cellText = document.createTextNode("");
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        i++;
        if (i == gryfChars.length)
            gryfEnd = true;
        if (i == slytChars.length)
            slytEnd = true;
        if (i == huffChars.length)
            huffEnd = true;
        if (i == raveChars.length)
            raveEnd = true;
        tblBody.appendChild(row);
    }

    tbl.appendChild(tblBody);
    tbl.setAttribute("border", "2");
}

function getChar(name) {
    var charPos = false;
    for(i = 0; i < characters.length; i++) {
        if(name == characters[i].name){
            charPos = i;
            break;
        }
    }
    if(!charPos && charPos !== 0) //if character not found in array
        return;                  //and the position isn't 0 then return

    char_pic.innerHTML = '<img src=\"'+characters[charPos].image+'"/>';
        switch(characters[charPos].house) {
            case 'Gryffindor':
                char_name.innerHTML = '<p style="color: rgb(116, 0, 1);">'+characters[charPos].name+'</p>';
                //char_info.style = "color: rgb(116, 0, 1);";
                break;
            case 'Slytherin':
                char_name.innerHTML = '<p style="color: rgb(26, 71, 42);">'+characters[charPos].name+'</p>';
                break;
            case 'Hufflepuff':
                char_name.innerHTML = '<p style="color: rgb(255, 216, 0);">'+characters[charPos].name+'</p>';
                break;
            case 'Ravenclaw':
                char_name.innerHTML = '<p style="color: rgb(14, 26, 64);">'+characters[charPos].name+'</p>';
                break;
        }
        var detail;
        for (const key in characters[charPos]) {
            if(key != "wand" && key != "image" && key != "name" && `${characters[charPos][key]}`)
            {
                detail = document.createElement('li');
                detail.appendChild(document.createTextNode(`${key}: ${characters[charPos][key]}`));
                char_info.appendChild(detail);
            }
        }
}

function randomChar() {

}