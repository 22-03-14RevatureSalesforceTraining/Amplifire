({
	getPokemon : function(component) {
		let action = component.get("c.QueryPokemon");
        let index = component.get("v.index");
        console.log(index);
        action.setParams({ pokemonName : index });
        action.setCallback(this, function(response){
            console.log(response.getState());
            if(response.getState() == 'SUCCESS'){
                let returnList = [];
                let temp = response.getReturnValue();
                for (var key in temp){
                    returnList.push({value:temp[key], key: key});
                }
                component.set("v.info", returnList);
                console.log(returnList);
            }
            
        });
        
        $A.enqueueAction(action);
	}
})