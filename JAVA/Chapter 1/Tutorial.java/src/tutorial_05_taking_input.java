import java.util.Scanner;

public class tutorial_05_taking_input {
    public static void main(String[] args) {
        System.out.println("Taking input from the user");
        Scanner sc=new Scanner(System.in);
//        System.out.println("Enter first number");
//        int a= sc.nextInt();
//        float a= sc.nextFloat();
//        System.out.println("Enter 2nd number");
//        int b= sc.nextInt();
//        float b= sc.nextFloat();
//        int sum=a+b;
//        float sum=a+b;
//        System.out.println("The sum of these numbers are :");
//        System.out.println(sum);
//        boolean b1=sc.hasNextInt(); //hasnextInt() is a boolean function to check whether the number is an integer or not
//        System.out.println(b1);
//        String str=sc.next(); //sc.next scans the first word only and terminates whenever it scans a white space
        String str=sc.nextLine();
        System.out.println(str);
    }
}
