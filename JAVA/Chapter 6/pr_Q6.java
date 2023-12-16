import java.util.Scanner;

public class pr_Q6
{
    public static void main(String[] args) {
        int i;
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the size of the array");
        int n= sc.nextInt();
        int [] arr=new int[n];
        System.out.println("Entering the array elements");
        for (i=0; i<n; i++)
        {
            System.out.printf("arr[%d]=",i);
            arr[i]= sc.nextInt();
        }
        int pos=arr[0];
        for (i=0; i<n-1; i++) {
            if (arr[i + 1] > pos) {
                pos=arr[i+1];
            }
        }
        System.out.printf("The greatest number is %d",pos);
    }
}
