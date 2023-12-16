import java.util.Scanner;

public class quick_quiz_04
{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter range");
        int n=sc.nextInt();
        for (int i=n; i>0; i--)
        {
            System.out.println(i);
        }
    }
}
