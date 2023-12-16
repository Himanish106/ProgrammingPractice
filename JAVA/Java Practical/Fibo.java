import java.util.Scanner;

public class Fibo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter range");
        int n = sc.nextInt();
        int a = 0;
        int b = 1;
        System.out.print(a + "\t" + b + "\t");
        for (int i = 2; i < n; i++) {
            int sum = a + b;
            System.out.print(sum + "\t");
            a = b;
            b = sum;
        }
    }
}
