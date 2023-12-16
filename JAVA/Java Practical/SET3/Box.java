/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package SET3;

/**
 *
 * @author Gablu
 */
import java.util.Scanner;

public class Box {

    private double length;
    private double breadth;
    private double height;

    Box() {
        length = 0.0;
        breadth = 0.0;
        height = 0.0;
    }

    Box(Box obj) {
        this.length = obj.length;
        this.breadth = obj.breadth;
        this.height = obj.height;
    }

    static double getVol(double length, double breadth, double height) {
        return length * breadth * height;
    }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        Box b = new Box();
        System.out.println("Enter length");
        b.length = sc.nextDouble();
        System.out.println("Enter breadth");
        b.breadth = sc.nextDouble();
        System.out.println("Enter height");
        b.height = sc.nextDouble();
        Box b2 = new Box(b);
        System.out.println("Volume of the box=" + getVol(b2.length, b2.breadth, b2.height));
    }
}
