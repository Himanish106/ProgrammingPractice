import java.util.Scanner;

public class varArgs
{
//    static int addition(int x, int y)
//    {
//        return (x+y);
//    }
//    static int addition(int x,int y,int z)
//    {
//        return x+y+z;
//    }
//    static int addition(int x,int y,int z,int k)
//    {
//        return x+y+z+k;
//    } ----> To many methods for same operation will increase code size hence not convinient

    static int addition(int ...arr)
    {
//        int ...arr behaves as arr[]
        int sum=0;
        for (int i=0; i<arr.length; i++)
        {
            sum=sum+arr[i];
        }
        return sum;
    }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("The sum of 2 numbers is: "+addition(2,3));
        System.out.println("The sum of 3 numbers is: "+addition(2,3,5));
        System.out.println("The sum of 4 numbers is: "+addition(2,3,5,6));
        System.out.println("The sum of nothing is: "+addition());
    }
}

