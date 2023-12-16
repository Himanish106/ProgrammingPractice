import java.util.Scanner;

class Square {
    int side;

    public int getArea() {
        return side * side;
    }

    public int getPerimeter() {
        return 4 * side;
    }
}

public class pr_Q3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Square obj = new Square();
        System.out.println("Enter the side of square");
        obj.side = sc.nextInt();
        System.out.println("The area of the square is " + obj.getArea() + " and the perimeter of the square is "
                + obj.getPerimeter());
                sc.close();
    }
}
