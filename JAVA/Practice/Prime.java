import java.util.Scanner;

public class Prime {
    public static void main(String[] args) {
        int num, i, count = 0;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number to check prime");
        num = sc.nextInt();
        for (i = 1; i <= num; i++) {
            if (num % i == 0) {
                count++;
            }
        }
        if (count == 2) {
            System.out.println(num + " " + "is a prime number");
        } else {
            System.out.println(num + " " + "is not a prime number");
        }
        sc.close();
    }
}
