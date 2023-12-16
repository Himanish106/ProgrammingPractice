import java.util.Scanner;

public class pr_Q5 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int n;
        System.out.println("Enter a number to find factorial of");
        n=sc.nextInt();
        int factorial=1;
        for(int i=1; i<=n; i++)
        {
            factorial=factorial*i;
        }
        System.out.print("The factorial of the number is: "+factorial);
    }
}
