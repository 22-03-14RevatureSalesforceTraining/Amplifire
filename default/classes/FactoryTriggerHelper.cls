public class FactoryTriggerHelper {
    
    public static void alertManager(Map<Id, Factory__c> triggerOldMap, List<Factory__c> triggerNew){
     	
        for(Factory__c factory : triggerNew){
            Factory__c oldFactory = triggerOldMap.get(factory.Id);
            if(factory.Days_of_Operation__c != oldFactory.Days_of_Operation__c ||factory.Open_Time__c != oldFactory.Open_Time__c
               || factory.Close_Time__c != oldFactory.Close_Time__c){
                   
                Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
                Id managerId = factory.Manager__c;
                User manager = [SELECT Email FROM User WHERE Id = :managerId LIMIT 1];
                String[] toAddresses = new String[] {manager.Email};
                    
                mail.setToAddresses(toAddresses);
                mail.setReplyTo('adamkurtbaird@gmail.com');
                mail.setSenderDisplayName('Amplifire Allstars Support');
                mail.setSubject('Business days and/or hours of operation changed');
                mail.setPlainTextBody('Here are the updated business days: ' + factory.Days_of_Operation__c +
                '\nHere are the new business hours: Open Time - ' + factory.Open_Time__c + ' Close Time - ' + factory.Close_Time__c);
                   
                Messaging.sendEmail(new Messaging.SingleEmailMessage[] {mail});
            }
        }
    }
    
    public static void doNotInsert(List<Factory__c> triggerNew){
        for(Factory__c factory : triggerNew){
            if(factory.Used_Capacity__c > factory.Capacity__c){
                factory.addError('Cannot insert because used capacity is greater than capacity');
            }
        }
    }

    public static void deleteFactorySuppliers(List<Factory__c> triggerOld){
        List<Factory_Supplier__c> facSups = [SELECT Id, Factory__c FROM Factory_Supplier__c];
        List<Factory_Supplier__c> deleteFacSups = new List<Factory_Supplier__c>();
        
        for(Factory__c factory : triggerOld){
            for(Factory_Supplier__c facSup : facSups){
                if(facSup.Factory__c == factory.Id){
                    deleteFacSups.add(facSup);
                }
            }
        }
        delete deleteFacSups;
    }
}