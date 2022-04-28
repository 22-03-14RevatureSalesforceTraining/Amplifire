trigger LeadTrigger on Lead (before insert, before update, before delete, after insert, after update, after delete, after undelete) {
	if(Trigger.isBefore){
        if(Trigger.isInsert){
            
            System.debug('1');
           
            LeadTriggerHelper.beforeInsert(Trigger.New);
            
        }else if(Trigger.isUpdate){
            System.debug('2');
            LeadTriggerHelper.beforeUpdate(Trigger.New);
        }else if(Trigger.isDelete){
            System.debug('3');
        }
    }
    
    if(Trigger.isAfter){
       if(Trigger.isInsert){
            System.debug('4');
          //LeadTriggerHelper.beforeInsert(Trigger.New);
          List<Lead> ld = Trigger.New;
			System.debug(ld);           
        }else if(Trigger.isUpdate){
            System.debug('5');
        }else if(Trigger.isDelete){
            System.debug('6');
        }else if(Trigger.isUndelete){
            System.debug('7');
        } 
    }
}