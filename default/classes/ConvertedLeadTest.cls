@isTest(SeeAllData=true)
public class ConvertedLeadTest {
	@isTest
    static void testConvertedLead() {
        Lead testLead = [SELECT Id, Status, IsConverted FROM Lead WHERE Id = '00Q8b00001vR6dQEAS' LIMIT 1];
        
        Database.Leadconvert lc = new Database.LeadConvert();
        lc.setLeadId(testLead.Id);
        
        LeadStatus convertStatus = [SELECT Id, MasterLabel FROM LeadStatus WHERE IsConverted=true LIMIT 1];
        lc.setConvertedStatus(convertStatus.MasterLabel);
        
        Database.LeadConvertResult lcr = Database.convertLead(lc);
        System.assert(lcr.isSuccess());
        
        update testLead;
        
        Lead afterUpdate = [SELECT Id, Status, IsConverted FROM Lead WHERE Id = '00Q8b00001vR6dQEAS' LIMIT 1];
        
        System.assert(afterUpdate.IsConverted);
        
        List<Task> taskList = [SELECT WhatId FROM Task WHERE WhatId = '00Q8b00001vR6dQEAS'];
        System.assertEquals(1, taskList.size());
        
    }
}