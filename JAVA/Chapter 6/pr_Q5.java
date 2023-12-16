import java.util.Scanner;

public class pr_Q5
{
//    please refer reverse_array program which is a much better way than this
    public static void main(String[] args) {
        int n;
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter array size");
        n= sc.nextInt();
        int [] arr=new int[n];
        System.out.println("Enter the array elements");
        for (int i=0; i<arr.length; i++)
        {
            arr[i]=sc.nextInt();
        }
        System.out.println("Original Array");
        for (int i=0; i< arr.length; i++)
        {
            System.out.printf("%d\t",arr[i]);
        }
        System.out.println("");
        System.out.println("Reversed Array");
        for (int i= arr.length-1; i>=0; i--)
        {
            System.out.printf("%d\t",arr[i]);
        }
    }
}
