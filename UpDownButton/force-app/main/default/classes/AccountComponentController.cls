public class AccountComponentController {

    @AuraEnabled
    public static Account getAccount(){
        
        Account acct = [SELECT Name FROM Account LIMIT 1];
        return acct;
    }
}