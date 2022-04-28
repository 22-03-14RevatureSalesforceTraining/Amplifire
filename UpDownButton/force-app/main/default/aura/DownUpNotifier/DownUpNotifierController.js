({
    upClick : function(component, event, helper) {
        let upEvent = $A.get("e.c:UpDownEvent");
        
        upEvent.setParams({"Click": "Up"});

        upEvent.fire();

        console.log('up event fired');
    },

    downClick : function(component, event, helper) {
        let downEvent = $A.get("e.c:UpDownEvent");
        
        downEvent.setParams({"Click": "Down"});

        downEvent.fire();

        console.log('down event fired');
    }
})
