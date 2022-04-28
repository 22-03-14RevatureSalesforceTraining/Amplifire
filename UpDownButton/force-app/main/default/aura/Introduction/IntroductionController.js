({
	greetingChange : function(component, event, helper) {
		//lightweight, event-specific
		let greeting = component.get("v.greeting");
        if(greeting == "Hello"){
            component.set("v.greeting", "Goodbye");
        } else{
            component.set("v.greeting", "Hello");
        }
	},
    
    getAccount2: function(cmp, evt, hlpr){
    	hlpr.callApex(cmp);
	}
})