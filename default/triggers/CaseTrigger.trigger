trigger CaseTrigger on Case (before insert, after insert, before update, after update, before delete, after delete, after undelete) {
    if(Trigger.isBefore){
        if(Trigger.isInsert){
            CaseHandler.CaseProductRequire(Trigger.new);
        }
        if(Trigger.isDelete){
            CaseHandler.CaseDelete(Trigger.old);
        }
    }
    if(Trigger.isAfter){
        if(Trigger.isInsert){
            CaseHandler.CaseTaskCreation(Trigger.new);
        }
    }
}