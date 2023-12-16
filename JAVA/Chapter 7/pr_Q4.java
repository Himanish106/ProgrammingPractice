import java.util.Scanner;

public class pr_Q4
{
    static void pattern(int n)
    {
        for (int i=n; i>0; i--)
        {
            for (int j=i; j>0; j--)
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

