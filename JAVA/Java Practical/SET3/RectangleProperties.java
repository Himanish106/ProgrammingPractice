/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Project/Maven2/JavaApp/src/main/java/${packagePath}/${mainClassName}.java to edit this template
 */
package SET3;

/**
 *
 * @author Gablu
 */
import java.util.Scanner;

class Rectangle {

    double length, width, area;
    String colour;

    Rectangle() {
        length = 0.0;
        width = 0.0;
        area = 0.0;
        colour = "";
    }

    public void setLength(double length) {
        this.length = length;
    }

    public void setWidth(double width) {
        this.width = width;
    }

    public void setColour(String colour) {
        this.colour = colour;
    }

    public String getColour() {
        return colour;
    }

    public void findArea() {
        area = length * width;
        System.out.println("The area of a rectangle is: " + area);
    }
}

public class RectangleProperties {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the length of the rectangle");
        double length = sc.nextDouble();
        System.out.println("Enter the width of the rectangle");
        double width = sc.nextDouble();
        System.out.println("Enter the colour of the rectangle");
        String colour = sc.next();
        Rectangle r = new Rectangle();
        r.setLength(length);
        r.setWidth(width);
        r.findArea();
        r.setColour(colour);
        System.out.println("The colour of the rectangular box is: " + r.getColour());
    }
}
