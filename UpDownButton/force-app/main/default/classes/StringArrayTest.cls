public class StringArrayTest {

    public static List<String> generateStringArray(Integer index){
        List<String> testString = new List<String>();
        
        for(Integer i = 0; i < index; i++){
        testString.add('Test'+' '+i);
        } 
        
        System.debug(testString);
        return testString;
    }
}