import java.util.Scanner;

//Write a Java program to convert a string to lowercase
public class ch3_pr_Q1 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.printf("Enter a string\n");
        String str=sc.nextLine();
        System.out.println(str);
        System.out.println(str.toLowerCase());


    }
}
