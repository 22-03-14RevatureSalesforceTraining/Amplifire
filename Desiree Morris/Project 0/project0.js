function checkJavaScript(){
    console.log("JavaScript is Working");
};

checkJavaScript();



window.onload = function() {
    // gathering all the buttons on page load and setting them to variables
    // let darkButton = document.getElementById("darkButton");
    let sortButton = document.getElementById("sortButton");
    let gryffButton = document.getElementById("gryffButton");
    let huffButton = document.getElementById("huffButton");
    let ravenButton = document.getElementById("ravenButton");
    let slyButton = document.getElementById("slyButton");

    // function checkClick() {
    //     console.log ("button was clicked");
    // }

    let houses = ["gryffindor", "hufflepuff", "ravenclaw", "slytherin"]

    function createCards(charsArray) {
        let teamList = document.getElementById("teamList")
    
        if(teamList.innerHTML) {
            teamList.innerHTML = "";
        } 

        charsArray.forEach(character => {
            // console.log(character)
            teamList.innerHTML += `
                <div>
                    <img src="${character.image}">
                    <p> ${character.name} </p>
                    <table>
                        <label> Wand </label>
                        <tr>
                            <th> Wood </th>
                            <th> Core </th>
                            <th> Length (in) </th>
                        </tr>
                        <tr>
                            <td> ${character.wand.wood} </td>
                            <td> ${character.wand.core} </td>
                            <td> ${character.wand.length} </td>
                        </tr>
                    </table>
                </div>
                `
        });
    }

    /* Navigation Bar: When clicking the Magical Creatures button in the navigation
    change the style of the page.
    change the type of characters generated from humans to creatures.
    hide the sorting hat and onl
    make sure any text is updated to say either villian or hero as well*/

    // function darkButtonClick() {
    //     console.log ("villian button was clicked");
    // }

    // darkButton.addEventListener("click", darkButtonClick);

    /* Random Generator Section: on load include a picture that says
    "click the new hero/villian but"ton to generate a random hero/villian" */



    /* When clicking the sort button
    pick a random number and access the houses array at that index
    display the house at that index on the screen*/

    function sortButtonClick() {
        console.log ("sort button was clicked");
        let ranNum = Math.floor(Math.random() * houses.length);
        let sortedHouse = houses[ranNum]
        document.getElementById("sortedHouse").innerHTML = sortedHouse
    }

    sortButton.addEventListener("click", sortButtonClick);

    /* Choose Your Team Section: on load include a picture that says 
    "click either button to choose your team and generate a list of marvel or dc comic characters"*/



    /*When clicking the Gryffindor button
    send a GET request to the harry potter api for all Gryffindor charactors*/

    function gryffButtonClick() {
        console.log ("Gryffindor button was clicked");
        fetch("http://hp-api.herokuapp.com/api/characters/house/gryffindor")
        .then(res => res.json())
        .then(data => createCards(data))
    }
    
    gryffButton.addEventListener("click", gryffButtonClick);


    /*When clicking the Dc Comics button make an AJAX request to the hero API to return
    a list of heros or villians and filter them to only be DC Comics, then display them to
    the page with their cards*/

    function huffButtonClick() {
        console.log ("Hufflepuff button was clicked");
        fetch("http://hp-api.herokuapp.com/api/characters/house/hufflepuff")
        .then(res => res.json())
        .then(data => createCards(data))
    }

    huffButton.addEventListener("click", huffButtonClick);

     /*When clicking the Dc Comics button make an AJAX request to the hero API to return
    a list of heros or villians and filter them to only be DC Comics, then display them to
    the page with their cards*/

    function ravenButtonClick() {
        console.log ("Ravenclaw button was clicked");
        fetch("http://hp-api.herokuapp.com/api/characters/house/ravenclaw")
        .then(res => res.json())
        .then(data => createCards(data))
    }

    ravenButton.addEventListener("click", ravenButtonClick);

      /*When clicking the Dc Comics button make an AJAX request to the hero API to return
    a list of heros or villians and filter them to only be DC Comics, then display them to
    the page with their cards*/

    function slyButtonClick() {
        console.log ("Slytherin button was clicked");
        fetch("http://hp-api.herokuapp.com/api/characters/house/slytherin")
        .then(res => res.json())
        .then(data => createCards(data))
    }

    slyButton.addEventListener("click", slyButtonClick);

}


