import java.util.Scanner;

public class pr_Q1 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the size of the array");
        int n= sc.nextInt();
        float [] arr=new float[n];
        System.out.println("Entering the array elements");
        for (int i=0; i<n; i++)
        {
            System.out.printf("arr[%d]=",i);
            arr[i]= sc.nextFloat();
        }
        float sum=0;
        for (int i=0; i<n; i++)
        {
            sum=sum+arr[i];
        }
        System.out.println("The sum of the elements in the array is :"+sum);
    }
}
