//Write a Java program to detect double and triple spaces in a string
public class ch3_pr_Q4 {
    public static void main(String[] args) {
String str="This is  Himanish   Das   Hii!";
        System.out.println(str.indexOf("  "));
        System.out.println(str.indexOf("   "));
    }
}
// If the value comes -1 then no double or triple spaces present