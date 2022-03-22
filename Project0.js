const char_pic = document.getElementById('char_pic');
const char_info = document.getElementById('char_info');
const text = document.getElementById('name');
const submit = document.getElementById('submit');
const random = document.getElementById('random');
var gryfChars, slytChars, huffChars, raveChars, characters = new Array();

submit.addEventListener('click', userInput);  //Add event listener for submit button
random.addEventListener('click', randomChar); //and generate random character button

/***********
 * Summary: Gather data into arrays
 * Description: Fetches character data from the API and stores it in arrays
 * @return {Array}  All of the 4 hogwarts house arrays combined
***********/
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

/***********
 * Summary: Runs when the page loads
 * Description: Calls fetchChars() to populate arrays and then calls getChar()
 *              to make Harry Potter the character that is displayed. Then calls
 *              createTable() to populate the table with all of the characters
***********/
window.onload = (event) => {
    fetchChars().then(characters => {
        getChar("Harry Potter"); //make Harry Potter the default character when page is loaded
        createTable(); //populate table with characters when page loaded
    })
};

/***********
 * Summary: Creates the table of characters
 * Description: Uses each of the 4 arrays to complete one row
 *              of the table at a time in a nested loop.
***********/
function createTable() {
    var tbl = document.getElementById("char_house");
    var tblBody = document.getElementById("tbl_body");
    var row, cell, cellText;
    var gryfEnd, slytEnd, huffEnd, raveEnd = false; //signals the end of each array
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

/***********
 * Summary: Perform operations on user input
 * Description: Check to make sure input isn't blank by using a try/catch block
 *              and call getChar() to update the page if the character was found
 * @parameter event   The event passed to the function from event listener
***********/
function userInput(event) {
    if(event.keyCode === 13 || event.type == 'click') {
        try{
            input = document.getElementById('name').value;
            getChar(input);
        } catch (e) {
            alert("Enter some text first!");
        } finally {
            text.value = '';
        }  
    }
}

/***********
 * Summary: Update the page if character is found
 * Description: Takes in a name as a parameter from user input or random function
 *              and loops through the array to try to find the character.
 *              if it finds the character then changes what is displayed on the
 *              screen to the new character's image and information
 * @parameter name  The character's name
***********/
function getChar(name) {
    if(name === "") {
        throw exception; //if input string is empty
    }

    var charPos = false;
    for(i = 0; i < characters.length; i++) { //searches array for the character
        if(name == characters[i].name){ //if the name parameter matches, exit the loop
            charPos = i;
            break;
        }
    }
    if(!charPos && charPos !== 0) {    //if character not found in array
        alert("Character not found."); //and the position isn't 0
        return;                        //(because it would evaluate to false) then return
    }                              

    switch(characters[charPos].house) { //Styles the text color to match house color
        case 'Gryffindor':              //and changes the image and name displayed
            char_name.innerHTML = '<p style="color: rgb(116, 0, 1);">'+characters[charPos].name+'</p>';
            char_pic.innerHTML = '<img src="gryffindor.jpg"/>';
            char_info.style = "color: rgb(116, 0, 1);";
            break;
        case 'Slytherin':
            char_name.innerHTML = '<p style="color: rgb(26, 71, 42);">'+characters[charPos].name+'</p>';
            char_pic.innerHTML = '<img src="slytherin.jpg"/>';
            char_info.style = "color: rgb(26, 71, 42);";
            break;
        case 'Hufflepuff':
            char_name.innerHTML = '<p style="color: rgb(218, 165, 32);">'+characters[charPos].name+'</p>';
            char_pic.innerHTML = '<img src="hufflepuff.jpg"/>';
            char_info.style = "color: rgb(218, 165, 32); -webkit-text-stroke:1px black;";
            break;
        case 'Ravenclaw':
            char_name.innerHTML = '<p style="color: rgb(14, 26, 64);">'+characters[charPos].name+'</p>';
            char_pic.innerHTML = '<img src="ravenclaw.jpg"/>';
            char_info.style = "color: rgb(14, 26, 64);";
            break;
    }

    if(characters[charPos].image) //If the character has an image, display it on the page
        char_pic.innerHTML = '<img src=\"'+characters[charPos].image+'"alt="Character Not Found"/>';

    var result, finalResult, val, detail;
    char_info.innerHTML = ''; //reset the information list

    for (const key in characters[charPos]) { //loop to populate the information list
        if (key != "name" && key != "wand" && key != "image" && `${characters[charPos][key]}`) {
            result = key.replace( /([A-Z])/g, " $1" );
            finalResult = result.charAt(0).toUpperCase() + result.slice(1);
            console.log(characters[charPos][key]);

            if(characters[charPos][key] == true)
                val = "yes";
            else if(characters[charPos][key] == false)
                val = "no";
            else
                val = characters[charPos][key];
            detail = document.createElement('li');
            detail.appendChild(document.createTextNode(`${finalResult}: ${val}`));
            char_info.appendChild(detail);
        }
    }
}

/***********
 * Summary: Generate a random character
 * Description: Uses the Math random() function to pass a random character
 *              from the array to the getChar() function
***********/
function randomChar() {
    var randomNum = Math.floor(Math.random() * characters.length);
    var randomName = characters[randomNum].name;
    getChar(randomName);
}