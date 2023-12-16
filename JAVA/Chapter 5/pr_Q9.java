import java.util.Scanner;

public class pr_Q9
{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the number you want the multiplication table of");
        int num=sc.nextInt();
        int sum=0;
        for (int i=0; i<=12; i++)
        {
            int multiply= num*i;
            sum=sum+multiply;
            System.out.printf("%d x %d = %d\n",num,i,multiply);
        }
        System.out.println("The sum of the numbers of the multiplication table is "+sum);
    }
}

