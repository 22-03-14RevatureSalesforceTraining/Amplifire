public class ContactAndLeadSearch {
    public static List<List<SObject>> searchContactsAndLeads(String input){
        
        List<List<SObject>> searchList = [FIND :input IN NAME FIELDS RETURNING Contact, Lead];
        return searchList;
    }
}