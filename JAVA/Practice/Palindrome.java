import java.util.Scanner;

public class Palindrome {
    public static void main(String[] args) {
        int number, temp, sum = 0, r;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number");
        number = sc.nextInt();
        temp = number;
        while (temp > 0) {
            r = temp % 10;
            sum = sum * 10 + r;
            temp = temp / 10;
        }
        if (sum == number)
            System.out.println(number + " " + "is a Palindrome number");
        else
            System.out.println(number + " " + "is not a Palindrome number");
        sc.close();
    }
}
