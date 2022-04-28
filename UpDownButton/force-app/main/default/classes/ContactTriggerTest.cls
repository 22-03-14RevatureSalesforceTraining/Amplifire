@isTest
public class ContactTriggerTest {

    @isTest
    public static void PositiveTest(){
        Contact testCon = new Contact(FirstName = 'Arthur', LastName = 'PositiveTest', Email = 'ArthurTest@gmail.com');
        Test.startTest();
        insert testCon;
        Test.stopTest();
        
        List<Contact> testConList = [SELECT Email FROM Contact WHERE Id =:testCon.Id];
		
        List<Contact> con = ContactTriggerHandler.checkForDuplicates(testConList);
     
        System.assertEquals('arthurtest@gmail.com', con[0].Email );
        
        
    }
    @isTest
    public static void NegativeTest(){
        Contact testCon = new Contact(FirstName = 'Arthur', LastName = 'NegativeTest');
        Test.startTest();
        insert testCon;
        Test.stopTest();
        
        List<Contact> testConList = [SELECT Email, Name FROM Contact WHERE Id =:testCon.Id];
		
        List<Contact> con = ContactTriggerHandler.checkForDuplicates(testConList);
     
        System.assertEquals(null, con[0].Email );
        
        
    }
    
    @isTest
    public static void DuplicateTest(){
        Contact testCon = new Contact(FirstName = 'Arthur', LastName = 'DuplicateTest', Email = 'ArthurTest@gmail.com');
        Contact testCon2 = new Contact(FirstName = 'Arthur', LastName = 'DuplicateTest2', Email = 'ArthurTest@gmail.com');
        
        Boolean message = false;
        try{
            Test.startTest();
        	insert testCon;
        	insert testCon2;
        	Test.stopTest();
        } catch(System.DmlException e){
            message = e.getMessage().contains('ERROR: There is already an identical record: ');
        }
     
        System.assertEquals(true, message);
        
        
    }
}