({
    powerPokedex : function(component, event, helper) {
        // This code will be in the main handler
        let pokemonState = component.get("v.info");
        console.log("hello world");
        
        if(pokemonState){
            /* Default - There is a API call that gets the pokemon info
             * if the info is not null, then...
             * Set the oldState to pokemonState
             * Set v.info it to null to turn off the info 
             * (Defaults need to be changed to blank pictures and not bulbasaur)
             */
            console.log("current state is " + pokemonState);
            component.set("v.info", false);
            console.log("pokeMon state not null");
        }else {
            /* if the info is null, then ...
             * Set the v.info to oldState (which should have pokemon info)
             * Set the oldState to null
             */
            console.log("current state is " + pokemonState);
            component.set("v.info", true);
            console.log("pokeMon state was null");
        }
    }
})