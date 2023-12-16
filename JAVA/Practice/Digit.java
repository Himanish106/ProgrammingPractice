import java.util.Scanner;

class DigitExtract {
    public void digitMatch(int number, int n) {
        int r, temp, count = -1, position, count1 = 0;
        temp = number;
        while (temp > 0) {
            r = temp % 10;
            temp = temp / 10;
            count++;
        }
        position = count;
        while (number > 0) {
            r = number % 10;
            if (r == n) {
                System.out.printf("%d is found at position %d\n", n, position);
                count1++;
            }
            number = number / 10;
            position--;
        }
        if (count1 == 0) {
            System.out.println("No match found");
        }
    }
}

public class Digit {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        DigitExtract obj = new DigitExtract();
        System.out.println("Enter a number: ");
        int number = sc.nextInt();
        System.out.println("Enter a digit to match with the digit of that number");
        int n = sc.nextInt();
        obj.digitMatch(number, n);
        sc.close();
    }
}