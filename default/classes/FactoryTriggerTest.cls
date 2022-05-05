@isTest
public class FactoryTriggerTest {
    
    @isTest(SeeAllData=true) public static void testAlertManager(){
        List<Factory__c> testFactory = [SELECT Name FROM Factory__c WHERE Name = 'Buro' LIMIT 1];
        
        for(Factory__c factory : testFactory){
            factory.Days_of_Operation__c = 'Mon;Wed;Fri';
        }
        
        update testFactory;
       	System.assertEquals(1, Limits.getEmailInvocations()); //email was sent
    }
    
    @isTest public static void doNotInsertTest(){
        Factory__c testFac = new Factory__c(Name = 'test factory', Used_Capacity__c =5000, Capacity__c = 2000);
        
        try{
            insert testFac;
        }
        catch(DmlException e){
            System.assertEquals('Insert failed. First exception on row 0; first error: FIELD_CUSTOM_VALIDATION_EXCEPTION' +
                                ', Cannot insert because used capacity is greater than capacity: []', e.getMessage());
        }
    }
    
    @isTest(SeeAllData=true) public static void deleteFactorySuppliersTest(){
        List<Factory__c> testFactory = [SELECT Name FROM Factory__c WHERE Name = 'Buro'];
        System.assertEquals(1, testFactory.size());
        
        delete testFactory;
        
        List<Factory__c> afterDelete = [SELECT Name FROM Factory__c WHERE Name = 'Buro'];
        System.assertEquals(0, afterDelete.size());
    }
    
    
}