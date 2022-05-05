trigger AccountTrigger on Account (before insert, before update, before delete, after insert, after update, after delete, after undelete) {
	if(Trigger.isBefore) {
        
        if(Trigger.isInsert){
            // for Before Insert Events
            AccountHandler.BeforeInsertValidation(Trigger.new);
        }else if(Trigger.isUpdate){
            // for Before Update Events            
        }else if(Trigger.isDelete){
            // for Before Delete Events
            AccountHandler.BeforeDeleteCheck(Trigger.old);
        }else {
            // for Before error handling
        }
        
	}else if(Trigger.isAfter) {
        
		if(Trigger.isInsert){
			// for After Insert Events            
        }else if(Trigger.isUpdate){
            // for After Update Events
        }else if(Trigger.isDelete){
            // for After Delete Events
        }else if(Trigger.isUndelete){
            // for After Undelete Events
        }else {
            // for After error handling
        } 
        
    }
}