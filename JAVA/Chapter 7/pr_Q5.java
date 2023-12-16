import java.util.Scanner;

public class pr_Q5
{
    static int fibonacci(int n)
    {
//        0 1 1 2 3 5 8 13 21 34 55 89 144
//        Here n is the nth term which we are trying to find i.e value at nth position
        if (n==1||n==2)
        {
            return n-1;
        }
        else {
            return fibonacci(n-1)+fibonacci(n-2);
        }
    }

    public static void main(String[] args) {
        int n;
        Scanner sc= new Scanner(System.in);
        System.out.println("Enter the position");
        n= sc.nextInt();
        int value_at_position=fibonacci(n);
        System.out.printf("Value at position %d is %d",n,value_at_position);
    }
}
