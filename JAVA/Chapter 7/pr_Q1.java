import java.util.Scanner;

public class pr_Q1
{
    static void multiplication(int n)
    {
        for (int i=0; i<=12; i++)
        {
            int multiply=n*i;
            System.out.printf("%d x %d = %d ",n,i,multiply);
            System.out.printf("\n");
        }
    }

    public static void main(String[] args) {
        System.out.println("Enter a number to find multiplication table of");
        Scanner sc=new Scanner(System.in);
        int n= sc.nextInt();
        multiplication(n);
    }
}
