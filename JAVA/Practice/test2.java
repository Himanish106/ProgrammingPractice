import java.util.Scanner;
class Shape{
    int length,width;

    public void setLength(int length) {
        this.length = length;
    }
     public void setWidth(int width) {
        this.width = width;
    }
    public void getArea()
    {
        System.out.println("This is a method of super class to find area");
    }
    public void getPerimeter() {
        System.out.println("This is a method of superclass to find perimeter");
    }
}
class Circle extends Shape
{
    float radius;

    public void setRadius(float radius) {
        this.radius = radius;
    }
        public void getArea(){
        float area= ((float)Math.PI*radius*radius);
        System.out.println("The area of the circle is: "+area);
    }

    public void getPerimeter() {
        float perimeter= ((float) Math.PI*2*radius);
        System.out.println("The perimeter of the circle is: "+perimeter);
    }
}
class Quadrilateral extends Shape
{
    public void getArea()
    {
        int area=length*width;
        System.out.println("The area of the rectangle is: "+area);
    }
    public void getPerimeter()
    {
        int perimeter=2*(length+width);
        System.out.println("The perimeter of the rectangle is: "+perimeter);
    }
    public void getArea(int length)
    {
        int area=length*length;
        System.out.println("Area of the square is: "+area);
    }
    public void getPerimeter(int length)
    {
        int perimeter=4*length;
        System.out.println("Perimeter of the square is: "+perimeter);
    }
}
public class test2
{
    public static void main(String[] args) {
        Shape s=new Shape();
        s.getArea();
        s.getPerimeter();
    Circle c=new Circle();
    Quadrilateral q=new Quadrilateral();
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter your required radius");
        float n=sc.nextFloat();
    c.setRadius(n);
    c.getArea();
    c.getPerimeter();
        System.out.println("Enter the length and width of rectangle: ");
        int length= sc.nextInt();
        int width= sc.nextInt();
    q.setLength(length);
    q.setWidth(width);
    q.getArea();
    q.getPerimeter();
        System.out.println("Enter the length of the side of a square: ");
        int side= sc.nextInt();
    q.getArea(side);
    q.getPerimeter(side);
    }
}
