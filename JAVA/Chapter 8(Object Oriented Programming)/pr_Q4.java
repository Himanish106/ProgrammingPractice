import java.util.Scanner;
class Rectangle
{
    int length,breadth;

    public int getArea() {
        return length*breadth;
    }

    public int getPerimeter() {
        return 2*(length+breadth);
    }
}
public class pr_Q4
{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        Rectangle obj=new Rectangle();
        System.out.println("Enter length and breadth of the rectangle");
        obj.length=sc.nextInt();
        obj.breadth=sc.nextInt();
        System.out.println("The area of the rectangle is "+obj.getArea()+" and the perimeter is "+obj.getPerimeter());
        sc.close();
    }
}
