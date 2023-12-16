import java.util.Scanner;

public class chap_1_practice_set_Q1 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter 3 numbers to add them");
        int num1=sc.nextInt();
        int num2=sc.nextInt();
        int num3=sc.nextInt();
        int sum=num1+num2+num3;
        System.out.print("The sum of 3 numbers are: "+sum);
    }
}
