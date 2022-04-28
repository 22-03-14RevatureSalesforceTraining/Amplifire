public class LeadPageController {
    public static List<Lead> getLeads(){
        List<Lead> results = [SELECT FirstName, LastName, Rating, Status FROM Lead ORDER BY Status];
        return results;
    }
}