({
	fireRandomEvent : function(component, event, helper) {
		let randomEvent = component.getEvent("randomPokemon");
        randomEvent.setParam("message", "RandomEvent Fired.");
	}
})