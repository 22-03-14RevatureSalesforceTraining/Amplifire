public class AccountHandler {
    public static void BeforeInsertValidation(List<Account> newAcc){
        /* Validation Logic TODO:
         * get the names from the account object that match the new account name and store in a list
         * check to see if that list contains any accounts
         * if true (the list size is greater than 0)
         *  - Then add an error to display on the Ui that says "Account name already exists, please pick a different name."
         * if false (the list size is less than 0)
         *  - Then do nothing and allow the insert to occur
         */
       
        //System.debug(newAcc[0].Name);
        
		List<Account> accCheck = [SELECT Name FROM Account WHERE Name= :newAcc[0].Name];
        //System.debug(accCheck);
        
        if(accCheck.size()>0){
            //System.debug('Account name already exists, please pick a different name.');
            newAcc[0].Name.addError('Account name already exists, please pick a different name.');
        }
  
    }
    
    public static void BeforeDeleteCheck(List<Account> delAcc){
        /* Delete Check Validation TODO:
         * get all the opportunities linked to the account we with to delete and store in a list
         * check if any opportunities are in the list
         * if true (there are items in the list)
         *  - check if there are any items on the list where isClosed is false
         *   + if a isClose = false is found then stop the deletion
         *   + throw an error message that says 'This Account is associated with an open Opportunity and cannot be deleted'
         * if false (there are no items in the list)
         *  - do nothing and allow the delete
         */
        
        //System.debug(delAcc);
        
        List<Opportunity> AccOpps = [SELECT Name, AccountId, isClosed FROM Opportunity WHERE AccountId = :delAcc[0].id];
        
        if(AccOpps.size()>0){
            //System.debug(AccOpps);
            
            for(Opportunity opp : AccOpps){
                if(opp.isClosed == false){
                    delAcc[0].id.addError('This Account is associated with an open Opportunity and cannot be deleted');
                }
            }
        }
        
    }
}
