import java.util.Scanner;

public class factorial_using_recursion
{
    /*
       factorial(5)=5 * 4 * 3 * 2 * 1
       factorial(n)=n * n-1.......*1
       factorial(n)=n * factorial(n-1)
       factorial(0) and factorial(1) = 1
    */
    static int factorial(int n)
    {
        if (n==0||n==1)
        {
            return 1;
        }
        else
            return (n*factorial(n-1));
    }

    public static void main(String[] args) {
        int n;
        Scanner io=new Scanner(System.in);
        System.out.println("Enter a number to find factorial of");
        n= io.nextInt();
        System.out.println(factorial(n));
    }
}
