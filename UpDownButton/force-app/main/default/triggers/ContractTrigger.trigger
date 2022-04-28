trigger ContractTrigger on Contract (before insert, before update, before delete, after insert, after update, after delete, after undelete) {
    if(Trigger.isBefore){
        if(Trigger.isInsert){
            System.debug('1');
        }else if(Trigger.isUpdate){
            System.debug('2');
        }else if(Trigger.isDelete){
            System.debug('3');
        }
    }
    
    if(Trigger.isAfter){
       if(Trigger.isInsert){
            System.debug('4');
        }else if(Trigger.isUpdate){
            System.debug('5');
        }else if(Trigger.isDelete){
            System.debug('6');
        }else if(Trigger.isUndelete){
            System.debug('7');
        } 
    }
}