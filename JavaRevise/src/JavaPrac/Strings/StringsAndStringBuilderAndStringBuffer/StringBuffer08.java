package JavaPrac.Strings.StringsAndStringBuilderAndStringBuffer;

public class StringBuffer08 {

    public static void main(String[] args) {
//      Remember Default Size of StringBuffer is 16 characters.  
//      Constructor 1  --- Default Type
        StringBuffer sb = new StringBuffer();
//      Constructor 2 --- Value of the Buffer
        StringBuffer sb2 = new StringBuffer("Himanish Das");
//      Constructor 3 --- Size of the Buffer
        StringBuffer sb3 = new StringBuffer(35);
        sb.append("Abhishek");
        String str = sb.toString();
        System.out.println(str);
    }
}
