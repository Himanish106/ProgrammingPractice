import java.util.Scanner;

public class pr_Q3
{
    static int sum_natural_recursion(int n)
    {
        if (n==1)
        {
            return 1;
        }
        else {
            return (n+sum_natural_recursion(n-1));
        }
    }

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int n;
        System.out.println("Enter a number");
        n=sc.nextInt();
        int sum=sum_natural_recursion(n);
        System.out.println("Sum of first n natural numbers are: "+sum);
    }
}
