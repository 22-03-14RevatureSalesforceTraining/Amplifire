public class FirstComponentController {

 @AuraEnabled
    public static Lead getLead(){
        
        Lead ld = [SELECT Name FROM Lead LIMIT 1];
        return ld;
    }
}