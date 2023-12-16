import java.util.Scanner;

public class pr_Q8
{
    static void pattern_rec(int n)
    {
        if (n>0)
        {
            pattern_rec(n-1);
            for (int i=0; i<n; i++)
            {
                System.out.print("*\t");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter a number");
        int num= sc.nextInt();
        pattern_rec(num);
    }
}
