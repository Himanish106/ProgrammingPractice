import java.util.Scanner;

public class if_else_conditional_statement
{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter age to check whether the person can drive or not");
        int age=sc.nextInt();
        if (age>=18)
        {
            System.out.printf("Your age is %d, Hence you can drive",age);
        }
        else
        {
            System.out.printf("Your age is %d, Hence you cannot drive",age);
        }
    }
}
