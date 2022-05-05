@isTest
public class AccountTriggerTest {

    @isTest
    static void beforeInsertErrorTest(){
        Account a = new Account(Name='TestRun');
        insert a;
        
        Account b = new Account(Name='TestRun');
        Database.SaveResult resultInsert = Database.insert(b, false);
        System.debug(resultInsert.getErrors());
        Integer failed = 0;
        
        if(!resultInsert.isSuccess()){
            failed = 1;
        }
        
        System.assertEquals(1, failed);

    }
    
    @isTest
    static void beforeDeleteErrorTest(){
        Account c = new Account(Name='TestRun2');
        insert c;
        
        List<Account> accId = new List<Account>([SELECT id FROM Account WHERE Name='TestRun2']);
        
        // need to assign an account id to a new opportunity to associate it with the account
        // need to assign isCLosed to false but it's not writable... use StageName instead.    
        for(Account i : accId){
            Opportunity o = new Opportunity(Name='TestRunOpp', AccountId= i.id, StageName='Prospecting');
        }
        

		Database.DeleteResult resultDelete = Database.delete(accId[0]);
        
        Integer failed2 = 0;
        
        if(!resultDelete.isSuccess()){
            failed2 = 1;
        }
        
        System.assertEquals(1,failed2);
    }
    
}