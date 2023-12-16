import java.util.Scanner;

public class pr_Q2
{
    static void pattern(int n)
    {
        for (int i=0; i<n; i++)
        {
            for (int j=0; j<i; j++)
            {
                System.out.print("*\t");
            }
            System.out.println("");
        }
    }

    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        System.out.println("Enter a number");
        int num=sc.nextInt();
        pattern(num);
    }
}
