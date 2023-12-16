import java.util.Scanner;

public class pr_Q7
{
    static void pattern_rec(int n)
    {
        if (n>0)
        {
            for (int i=n; i>0; i--)
            {
                System.out.print("*\t");
            }
            System.out.println();
            pattern_rec(n-1);
        }
    }

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter a number");
        int num= sc.nextInt();
        pattern_rec(num);
    }
}


