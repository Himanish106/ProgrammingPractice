import java.util.Scanner;

public class sum_using_method
{
    static int addition(int x, int y)
    {
        return (x+y);
    }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int x,y;
        System.out.println("Enter 2 numbers");
        x= sc.nextInt();
        y= sc.nextInt();
        System.out.println("The sum of 2 numbers is: "+addition(x,y));
    }
}
