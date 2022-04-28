trigger AccountAddressTrigger on Account (before insert, before update) {
    for(Account a: [SELECT Match_Billing_Address__c FROM Account ]){}
}