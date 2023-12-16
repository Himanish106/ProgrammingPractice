import java.util.Scanner;

public class pr_Q6
{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter a number to find factorial of");
        int n=sc.nextInt();
        int i=1;
        int factorial=1;
        while (i<=n)
        {
            factorial=factorial*i;
            i++;
        }
        System.out.printf("The factorial of the given number %d is %d: ",n,factorial);
    }
}
