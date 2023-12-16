import java.util.Scanner;

public class pr_Q3
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
        int sum=0;
        for(int element:arr)
        {
            sum=sum+element;
        }
        System.out.println("The value of average marks is: "+sum/n);
    }
}
