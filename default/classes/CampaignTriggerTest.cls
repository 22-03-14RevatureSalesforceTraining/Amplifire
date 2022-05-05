@isTest
public class CampaignTriggerTest {
    @isTest static void TestCreate200Records(){
        List<Campaign> campaignList = new List<Campaign>();
        for(Integer i=0; i < 200; i++){
            Campaign c = new Campaign(Name='Test Account' + i, StartDate= Date.today());
            campaignList.add(c);    
        }
        
        Test.startTest();
            insert campaignList;
        Test.stopTest();
        
    }
        
}