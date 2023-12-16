import java.util.Scanner;

public class quick_quiz_01 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the size of the array");
        int n=sc.nextInt();
        int arr[]=new int[n];
        System.out.println("Enter the elements of the array");
        for (int i=0; i<n; i++)
        {
            arr[i]=sc.nextInt();
        }
        System.out.println("Printing the array in reverse order");
        for (int i=n-1; i>=0; i--)
        {
            System.out.println(arr[i]);
        }
    }
}
