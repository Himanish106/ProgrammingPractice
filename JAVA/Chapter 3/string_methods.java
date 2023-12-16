
public class string_methods {
    public static void main(String[] args) {
        String name="Himanish";
        /*
              0  1  2  3  4  5  6  7
              H  i  m  a  n  i  s  h
        */
        // System.out.println(name);
       String name2="HIMANISH";
//        int value=name.length();//Use to find the length of the string
//        System.out.println(value);
//        String lower_case=name2.toLowerCase(); //Converts the given string into small letters
//        System.out.println(lower_case);
//        String upper_case=name.toUpperCase(); //Converts the given string into capital letters
//        System.out.println(upper_case);
       String non_trimmed="     Himanish   ";
       System.out.println(non_trimmed);
       String trim=non_trimmed.trim(); /* Returns a new string after removing all the leading and the trailing
//        spaces from the original string */
       System.out.println(trim);
//        String substring=name.substring(3); //Returns a substring from the start to end
//        System.out.println(substring);
//        String substring2=name.substring(3,5);
//        /*Returns a substring from the start index to the end index. Start index is included and end index is
//        excluded */
//        System.out.println(substring2);
//        String replace=name.replace('i','z');
//        System.out.println(replace);
//        String replace2=name.replace("Him","Sxi");
//        System.out.println(replace2);
//        String replace3=name.replace("i","ta");
//        System.out.println(replace3);
//        /*
//        Returns a new string after being replaced by a character or a string
//        */
//        boolean starts_with=name.startsWith("Pi");
        //checks whether the start of the string matches with the the mentioned string
//        System.out.println(starts_with);
//        boolean ends_with=name.endsWith("h");
//    checks whether the end of the string matches with the the mentioned string
//        System.out.println(ends_with);
//        char charAt=name.charAt(7); //Returns the particular character as per the mentioned index
//        System.out.println(charAt);
        /*
              0  1  2  3  4  5  6  7
              H  i  m  a  n  i  s  h
        */
//        int indexOf=name.indexOf("j");// Returns the index of the first occurrence of the given string
//        System.out.println(indexOf);
//    String modified_Name="Harryrry";
    /*
          0  1  2  3  4  5  6  7
          H  a  r  r  y  r  r  y

    */
//        System.out.println(modified_Name.indexOf("rry",4));
//        Returns the index of the given string as per the mentioned starting index
//        System.out.println(modified_Name.lastIndexOf("rry"));
//        Returns the index of the last occurrence of the given string
//        System.out.println(modified_Name.lastIndexOf("rry",4));
//        boolean equals=name.equals("Himanish");
//        Returns true if the mentioned string matches with the given string(name)
//        System.out.println(equals);
        // System.out.println(name.equalsIgnoreCase("hImAnIsh"));
//        Returns true if two strings are equal ignoring the case of the characters
    }
 }