import java.util.Scanner;
public class reverse_array
{
    public static void main(String[] args) {
        int n,temp;
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
        int l=Math.floorDiv(n,2);
//        for (int i=0; i< arr.length/2; i++)
        for (int i=0; i<l; i++)
        {
            temp=arr[i];
//            arr[i]=arr[arr.length-1-i];
            arr[i]=arr[l-1-i];
//            arr[arr.length-1-i]=temp;
            arr[l-1-i]=temp;
            System.out.printf("%d\t",arr[i]);
        }
    }
}
