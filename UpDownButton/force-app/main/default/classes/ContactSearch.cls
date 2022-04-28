public class ContactSearch {
    public static List<Contact> searchForContacts(String inputName, String inputId){
        List<Contact> conList = [SELECT Name, Id FROM Contact WHERE (LastName =: inputName AND MailingPostalCode =: inputId)];
        
        return conList;
    }
}