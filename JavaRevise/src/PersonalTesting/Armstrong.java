/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package PersonalTesting;

/**
 *
 * @author Himanish
 */
public class Armstrong {

    public static void main(String[] args) {
        int num = 93084;
        int temp = num;
        double sum = 0;
        int noOfDigits = extractDigits(num);
        while (temp > 0) {
            int rem = temp % 10;
            sum = sum + Math.pow(rem, noOfDigits);
            temp = temp / 10;
        }
        if (sum == num) {
            System.out.println("The number is an armstrong number");
        } else {
            System.out.println("The number is not an armstrong number");
        }
    }

    static int extractDigits(int num) {
        int count = 0, rem;
        while (num > 0) {
            rem = num % 10;
            count = count + 1;
            num = num / 10;
        }
        return count;
    }
}
