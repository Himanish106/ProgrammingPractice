import java.util.Scanner;

public class pr_Q8
{
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
        boolean isSorted=true ;
        for (int i=0; i<n-1; i++)
        {
            if (arr[i]>arr[i+1])
            {
                isSorted=false;
                break;
            }
        }
        if (isSorted)
            System.out.println("The array is sorted");
        else
            System.out.println("The array is not sorted");
    }
}
