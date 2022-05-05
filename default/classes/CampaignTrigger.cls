public class CampaignTrigger {
    public static void createCampaign(List<Campaign> campaignList){
        for(Campaign c: campaignList){
            if(c.StartDate != Date.today()){
                c.StartDate = Date.today();                
            }
        }
    }
}