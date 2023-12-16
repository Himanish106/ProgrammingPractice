import java.util.Scanner;

public class pr_Q2
{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the size of the array");
        int n= sc.nextInt();
        int [] arr=new int[n];
        System.out.println("Entering the array elements");
        for (int i=0; i<n; i++)
        {
            System.out.printf("arr[%d]=",i);
            arr[i]= sc.nextInt();
        }
        System.out.println("Enter a number to check whether it is present in the array or not");
        int num=sc.nextInt();
        boolean isPresent=false;
        for (int i=0; i<n; i++ )
        {
           if (num==arr[i])
           {
               isPresent=true;
               break;
           }
        }
        if (isPresent)
            System.out.println("The number is in the array");
        else
            System.out.println("The number is not in the array");
    }
}
