import java.util.Scanner;

public class series {
    public static void main(String[] args) {
        int n, i, mul;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the size of the series");
        System.out.println("The required series is: ");
        n = sc.nextInt();
        for (i = 1; i <= n; i++) {
            mul = 3 * i;
            if (mul % 9 == 0) {
                continue;
            }
            System.out.print("\t"+mul);
        }
        sc.close();
    }
}
