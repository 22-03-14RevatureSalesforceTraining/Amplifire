({
	generateClicked : function(component, event, helper) {
		helper.getPokemon(component);
	},
    
    doInit : function(component, event, helper){
        var mapList = component.get('v.info');
        var imageName = component.get('v.imageName');
        component.set("v.imageName", mapList[2]['value'][0]);
        component.set("v.pokemonName", mapList[3]['value'][0]);
        component.set("v.pokemonType", mapList[1]['value']);
        component.set("v.pokemonAbility", mapList[0]['value']);
        //console.log(mapList[3]['value'][0]);
    }
})