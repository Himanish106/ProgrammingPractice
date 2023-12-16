import java.util.Scanner;

public class quick_quiz_03 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter range");
        int n=sc.nextInt();
//        for(int i=1; i<=n; i=i+2)
//        {
//            System.out.println(i);
//        }
        for(int i=0; i<n; i++)
        {
            System.out.println((2*i)+1);
        }
    }
}
