import java.util.Scanner;

public class ShapeOutput
{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the length and breadth of the rectangle");
        int length= sc.nextInt();
        int breadth= sc.nextInt();
        Rectangle r=new Rectangle(length,breadth);
        System.out.println("Enter the radius of the circle");
        int radius=sc.nextInt();
        Circle c=new Circle(radius);
        System.out.println("Enter the length of the square");
        int squarelength=sc.nextInt();
        Square s=new Square();
        s.setSquarelength(squarelength);
        System.out.printf("The area of rectangle is %d and perimeter is %d",r.Area(),r.Perimeter());
        System.out.printf("\nThe area of the circle is %d and perimeter is %d",c.Area(),c.Perimeter());
        System.out.printf("\nThe area of square is %d and perimeter of square is %d",s.Area(),s.Perimeter());
    }
}
