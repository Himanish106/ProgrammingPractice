import java.util.Scanner;

public class pr_Q2
{
    public static void main(String[] args) {
        int n;
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the range");
        n=sc.nextInt();
        int i=1;
        int sum=0;
        while (i<=n)
        {
             sum=sum+i*2;
             i++;
        }
        System.out.println(sum);
    }
}
// 2 4 6 8 10 12 14 16
