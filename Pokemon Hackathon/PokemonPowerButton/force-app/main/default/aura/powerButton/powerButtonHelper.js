({
    pwrPokeHelper : function(component) {
        // let a = component.get("c.classname")
        let pokemonState = component.get("v.info");
        let oldState = null;
        if(pokemonState != null){
            /* Default - There is a API call that gets the pokemon info
             * if the info is not null, then...
             * Set the oldState to pokemonState
             * Set v.info it to null to turn off the info 
             * (Defaults need to be changed to blank pictures and not bulbasaur)
             */
            oldState = pokemonState;
            component.set("v.info", null);
        }else {
            /* if the info is null, then ...
             * Set the v.info to oldState (which should have pokemon info)
             * Set the oldState to null
             */
            component.set("v.info", oldState);
            oldState = null;
        }
    }
})
