trigger FactorySupplierTrigger on Factory_Supplier__c (before insert) {
    Map<String, Object> params = new Map<String, Object>();
    
    for(Factory_Supplier__c FS : Trigger.New) {
        params.put('newFactorySupplier', FS);
        Flow.Interview myFlow = new Flow.Interview.Delete_Duplicate_Factory_Suppliers(params);
        myFlow.start();
        params.clear();
    }
}