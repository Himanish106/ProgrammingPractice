import java.util.Scanner;

public class pr_Q2 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter the marks in subject 1: ");
        byte marks1=sc.nextByte();
        System.out.print("Enter the marks in subject 2: ");
        byte marks2=sc.nextByte();
        System.out.print("Enter the marks in subject 3: ");
        byte marks3=sc.nextByte();
        float avg=(marks1+marks2+marks3)/3f;
        System.out.printf("Your overall percentage is: %f\n",avg);
        if (avg>=40 && marks1>=33 && marks2>=33 && marks3>=33)
        {
            System.out.println("Congratulations! You have been promoted");
        }
        else{
            System.out.println("Sorry! You cannot be promoted");
        }
    }
}
