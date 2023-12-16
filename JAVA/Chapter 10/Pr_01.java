import java.util.Scanner;

class Circle
{
     public int radius;
     Circle()
     {
         System.out.println("I am a non parameterized constructor");
     }
    Circle(int radius)
    {
        System.out.println("I am a parameterized constructor of class circle");
        this.radius=radius;
        System.out.println("The value of radius is: "+radius);
    }
    public double area()
    {
        return Math.PI*radius*radius;
    }
}
class Cylinder extends Circle
{
    public int height;
    Cylinder(int radius,int height){
        super(radius);
        System.out.println("I am a Parameterized Constructor of class Cylinder");
        this.height=height;
    }
    public double volume()
    {
        return Math.PI*radius*radius*height;
    }
}
public class Pr_01
{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the radius and height: ");
        int radius= sc.nextInt();
        int height= sc.nextInt();
        Cylinder obj=new Cylinder(radius,height);
        System.out.println("Area of the circle is: "+obj.area());
        System.out.println("Volume of the cylinder is: "+obj.volume());
        Circle ob=new Circle();
    }
}
