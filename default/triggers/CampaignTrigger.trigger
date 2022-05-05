trigger CampaignTrigger on Campaign (before insert, before update) {
    
    if(Trigger.isBefore){
        if(Trigger.isInsert || Trigger.isUpdate){
            CampaignTrigger.createCampaign(Trigger.new);
        
        }
    }
}