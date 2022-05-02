({
	firePowerButtonEvent : function(component, event, helper) {
        let powerEvent = $A.get("e.c:PowerButtonEvent");
        powerEvent.fire();
        console.log('event fired')
	}
})