({
	fireRandomEvent : function(component, event, helper) {
		let randomEvent = $A.get("e.c:RandomEvent");
        randomEvent.setParam("message", Math.floor(Math.random() * 898));
		randomEvent.fire();
	},

	handleRandomEvent : function(component, event, helper){
		let num = event.getParam("message");
        component.set("v.index", num);
    }
})