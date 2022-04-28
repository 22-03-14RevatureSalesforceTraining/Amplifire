({
	getPokemon : function(component) {
		let action = component.get("c.QueryPokemon");
        action.setParams({ pokemonName : "76" });
        action.setCallback(this, function(response){
            if(response.getState() == 'SUCCESS'){
                let returnList = [];
                let temp = response.getReturnValue();
                for (var key in temp){
                    returnList.push({value:temp[key], key: key});
                }
                component.set("v.info", returnList);
                //console.log(returnList);
            }
            
        });
        
        $A.enqueueAction(action);
	}
})