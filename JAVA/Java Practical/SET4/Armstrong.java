/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package SET4;

/**
 *
 * @author Gablu
 */
public class Armstrong {

    public static void main(String args[]) {
        for (int i = 1; i <= 500; i++) {
            int sum = 0;
            int temp = i;
            while (temp > 0) {
                int remainder = temp % 10;
                sum = sum + (remainder * remainder * remainder);
                temp = temp / 10;
            }
            if (sum == i) {
                System.out.println(i);
            }
        }
    }
}
