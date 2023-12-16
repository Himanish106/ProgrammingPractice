import java.util.Scanner;
class Divisor
{
    public static void main(String args[])
    {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter a number");
        int num1=sc.nextInt();
        try{
            System.out.println("Enter another number");
            int num2=sc.nextInt();
            System.out.println("Result : "+num1/num2);
        } catch(Exception e) {
            System.out.println("Cannot divide a number by 0");
        }
    }
}
