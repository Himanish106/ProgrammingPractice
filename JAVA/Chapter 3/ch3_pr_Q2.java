//Write a Java program to replace spaces with underscores
import java.util.Scanner;
public class ch3_pr_Q2 {
    public static void main(String[] args) {
Scanner sc=new Scanner(System.in);
        System.out.println("Enter a string:");
String str=sc.nextLine();
        System.out.println(str);
        System.out.println(str.replace(' ','_'));
    }
}
