trigger FactoryTrigger on Factory__c (before insert, before delete, after insert, after update, after delete, after undelete) {
    if(Trigger.isBefore){
        if(Trigger.isInsert)
            FactoryTriggerHelper.doNotInsert(Trigger.New);
        if(Trigger.isDelete)
            FactoryTriggerHelper.deleteFactorySuppliers(Trigger.Old);
    }
    if(Trigger.isAfter){
        if(Trigger.isUpdate)
            FactoryTriggerHelper.alertManager(Trigger.oldMap, Trigger.New);
    }
}