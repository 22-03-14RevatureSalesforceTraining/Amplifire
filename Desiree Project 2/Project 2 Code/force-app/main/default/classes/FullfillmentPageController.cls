public class FullfillmentPageController {
    public List<Supplier__c> suppliers{get;set;}
    
    public FullfillmentPageController() {
        suppliers = new List<Supplier__c>([SELECT Name, Phone_Number__c, Email__c, Website__c, Supplies__c FROM Supplier__c]); 
    }
    
}

