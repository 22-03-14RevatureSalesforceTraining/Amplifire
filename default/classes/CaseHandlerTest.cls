@isTest
public class CaseHandlerTest {
	@isTest
    static void CaseProductSupportTest(){
        Case c = new Case(RecordTypeId= Schema.SObjectType.Case.getRecordTypeInfosByName()
    		.get('Product Support').getRecordTypeId(),Status='New',Origin='Phone', Product__c='PL-02');
        insert c;
        List<Case> afterCreated = [SELECT  Product__c, Subject, Priority FROM Case WHERE Origin = 'Phone' AND Product__c = 'PL-02' LIMIT 1];
        
        System.assertEquals('Low', afterCreated[0].Priority);
        System.assertEquals('Product related problem.', afterCreated[0].Subject);
    }
    
    @isTest
    static void CaseSupplySupportTest(){
        Case c = new Case(RecordTypeId= Schema.SObjectType.Case.getRecordTypeInfosByName()
    		.get('Supply Chain Support').getRecordTypeId(),Status='New',Origin='Email', Product__c='Machine Problem');
        insert c;
        List<Case> afterCreated = [SELECT  Product__c, Subject, Priority FROM Case WHERE Origin = 'Email' AND Product__c = 'Machine Problem' LIMIT 1];
        
        System.assertEquals('High', afterCreated[0].Priority);
        System.assertEquals('Supply Chain related problem. Must be solved ASAP!', afterCreated[0].Subject);
    }
    
    @istest
    static void NoProductType(){
        Case c = new Case(RecordTypeId= Schema.SObjectType.Case.getRecordTypeInfosByName()
    		.get('Product Support').getRecordTypeId(),Status='New',Origin='Web');
        try {
            insert c;
        }
        catch (DmlException e){
            System.assertEquals('FIELD_CUSTOM_VALIDATION_EXCEPTION', e.getDmlStatusCode(0));
        }
    }
    
    @istest
    static void NoProductTypeSupply(){
        Case c = new Case(RecordTypeId= Schema.SObjectType.Case.getRecordTypeInfosByName()
    		.get('Supply Chain Support').getRecordTypeId(),Status='New',Origin='Web');
        try {
            insert c;
        }
        catch (DmlException e){
            System.assertEquals('FIELD_CUSTOM_VALIDATION_EXCEPTION', e.getDmlStatusCode(0));
        }
    }
    
    @isTest
    static void checkTaskCreation(){
        Case c = new Case(RecordTypeId= Schema.SObjectType.Case.getRecordTypeInfosByName()
    		.get('Product Support').getRecordTypeId(),Status='New',Origin='Phone', Product__c='PR-01', Subject='Test Task Creation');
        insert c;
        List <Case> caseCheck = [SELECT Id, Subject FROM Case WHERE Subject='Test Task Creation'];
        List<Task> task = [SELECT WhatId, Subject FROM Task WHERE Subject='Test Task Creation'];
        System.assertEquals(task[0].WhatId, caseCheck[0].Id);
        System.assertEquals('Test Task Creation', task[0].Subject);
    }
    
    @isTest
    static void taskDelete(){
        Case c = new Case(RecordTypeId= Schema.SObjectType.Case.getRecordTypeInfosByName()
    		.get('Product Support').getRecordTypeId(),Status='New',Origin='Phone', Product__c='PF-05', Subject='Test Task Creation');
        insert c;
        List<Case> afterCreated = [SELECT  Id FROM Case WHERE Subject = 'Test Task Creation' AND Product__c = 'PF-05' LIMIT 1];
        delete afterCreated;
        
        List<Task> checkDeletedTask = [SELECT WhatId FROM Task WHERE Whatid = :afterCreated[0].Id];
        System.assertEquals(0, checkDeletedTask.size());
    }
    
    
}