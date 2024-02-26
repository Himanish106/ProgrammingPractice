package JavaPrac.Strings.StringsAndStringBuilderAndStringBuffer;

public class StringMethods07 {

    public static void main(String[] args) {
        String myStr = "Hello";
//      codePointAt -- Returns the ascii value/unicode of a character at a specified index.  
        System.out.println(myStr.codePointAt(0));
//      codePointBefore -- Returns the ascii value/unicode of a character at a specified index.  
        System.out.println(myStr.codePointBefore(1));
//       codePointCount -- Returns the number of Unicode values found in a string.
        System.out.println(myStr.codePointCount(0, myStr.length()));

        String myStr1 = "Hello";
        String myStr2 = "HJLLO";
//        compareTo() -- Compares two strings lexicographically
        System.out.println(myStr1.compareTo(myStr2));
//       compareToIgnoreCase() -- Compares two strings lexicographically, ignoring case differences 
        System.out.println(myStr1.compareToIgnoreCase(myStr2));

//      concat() -- Appends the string to the end of another string.
        String str = "Hi Himanish ";
        String concStr = "How Are You?";
        System.out.println(str.concat(concStr));

//      contains() -- Checks whether a string contains a particular sequence of characters
        String checkString = "Hi Himanish How are you?";
        System.out.println(checkString.contains("Hi Himanish")); //true
        
//      contentEquals() -- The contentEquals() method searches a string to find out if it contains 
//                          the exact same sequence of characters in the specified string or StringBuffer.
        System.out.println(checkString.contentEquals("Hi Himanish How are you?"));
        
        
        
        
//      copyValueOf() -- The copyValueOf() method returns a String that represents the characters of a 
//                       char array.
        char charArray[]={'H','E','L','L','O'};
        String emptyString="";
        emptyString=String.copyValueOf(charArray,0,4);
        System.out.println(emptyString);
        
        
//       endsWith() -- 
         String chkEnd="Hello How are you";
         
        
    }
}
