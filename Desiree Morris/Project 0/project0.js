function checkJavaScript(){
    console.log("JavaScript is Working");
};

checkJavaScript();

window.onload = function() {
    // gathering all the buttons on page load and setting them to variables
    let darkButton = document.getElementById("darkButton");
    let newButton = document.getElementById("newButton");
    let marvelButton = document.getElementById("marvelButton");
    let dcButton = document.getElementById("dcButton");

    /* Navigation Bar: When clicking the Villian/Hero button in the navigation
    change the style of the page.
    change the type of characters generated from good to evil.
    change the new button to say either New Villian or New Hero. 
    make sure any text is updated to say either villian or hero as well*/

    function checkClick() {
        console.log ("button was clicked");
    }


    darkButton.addEventListener("click", checkClick);

    /* Random Generator Section: on load include a picture that says
    "click the new hero/villian but"ton to generate a random hero/villian" */



    /* When clicking the new button make an AJAX request to the hero API
    to return just one hero or villian (may need a filter feature and loop to return just a hero
    or just a villian) back and display a card with their infomation
    also handle errors here*/

    newButton.addEventListener("click", checkClick);

    /* Choose Your Team Section: on load include a picture that says 
    "click either button to choose your team and generate a list of marvel or dc comic characters"*/



    /*When clicking the Marvel button make an AJAX request to the hero API to return
    a list of heros or villians and filter them to only be Marval, then display them to
    the page with their cards*/

    marvelButton.addEventListener("click", checkClick);


    /*When clicking the Dc Comics button make an AJAX request to the hero API to return
    a list of heros or villians and filter them to only be DC Comics, then display them to
    the page with their cards*/

    dcButton.addEventListener("click", checkClick);
}


