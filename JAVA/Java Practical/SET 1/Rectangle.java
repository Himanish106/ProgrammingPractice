//Q1
import java.util.Scanner;

public class Rectangle {
    int length, breadth;

    Rectangle() {
        length = 0;
        breadth = 0;
    }

    Rectangle(int length, int breadth) {
        this.length = length;
        this.breadth = breadth;
    }

    public int getArea() {
        return length * breadth;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Rectangle rt = new Rectangle();
        System.out.println("Enter the length of the rectangle");
        rt.length = sc.nextInt();
        System.out.println("Enter the breadth of the rectangle");
        rt.breadth = sc.nextInt();
        Rectangle r = new Rectangle(rt.length, rt.breadth);
        System.out.println("The area of the rectangle is " + r.getArea());
    }
}