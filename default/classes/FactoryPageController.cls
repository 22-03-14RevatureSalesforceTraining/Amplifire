public with sharing class FactoryPageController {
    public Integer capacity {get; set;}
    public List<Factory__c> factories{get; set;}
    
    public FactoryPageController(){
        factories = new List<Factory__c>([SELECT Id, Name, Capacity__c, Used_Capacity__c, Days_of_Operation__c FROM Factory__c WHERE Capacity__c <= 2500]);
    }

    public void getFactories(){
        if(capacity == 2500)
            factories = new List<Factory__c>([SELECT Id, Name, Capacity__c, Used_Capacity__c, Days_of_Operation__c FROM Factory__c WHERE Capacity__c <= 2500]);
        else if(capacity == 5000)
            factories = new List<Factory__c>([SELECT Id, Name, Capacity__c, Used_Capacity__c, Days_of_Operation__c FROM Factory__c WHERE Capacity__c > 2500 AND Capacity__c <= 5000]);
        else
            factories = new List<Factory__c>([SELECT Id, Name, Capacity__c, Used_Capacity__c, Days_of_Operation__c FROM Factory__c WHERE Capacity__c > 5000]);
    }
}