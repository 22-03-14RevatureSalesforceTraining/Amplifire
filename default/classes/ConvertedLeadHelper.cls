public class ConvertedLeadHelper {
	 public static void convertedLead(List<Lead> triggerNew) {
        for(Lead l : triggerNew){
            if(l.isConverted){
                String leadId = l.Id;
                Converted_Lead__e pe = new Converted_Lead__e(Annual_Revenue__c = l.AnnualRevenue, Lead_Id__c = leadId,
                                                             Content__c = 'The lead ' + l.FirstName + ' ' + l.LastName +
                                                             ' has been converted.' + ' The annual revenue is ' + l.AnnualRevenue);
                Database.SaveResult sr = EventBus.publish(pe);
            }
        }
        
    } 
}