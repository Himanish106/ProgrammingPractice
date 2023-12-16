import java.util.Scanner;

public class pr_Q3
{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the number you want the multiplication table of");
        int num=sc.nextInt();
        for (int i=0; i<=12; i++)
        {
            int multiply= num*i;
            System.out.printf("%d x %d = %d\n",num,i,multiply);
        }
    }
}
