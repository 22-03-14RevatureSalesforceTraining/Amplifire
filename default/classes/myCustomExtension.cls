public with sharing class myCustomExtension {
    private final Case c;
    
    public myCustomExtension(ApexPages.StandardSetController stdController){
    	    this.c = (Case)stdController.getRecord();
    }
    
    public String getTitle(){
        return 'New Case List View';
    }
}