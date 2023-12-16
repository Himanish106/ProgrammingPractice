import java.util.Scanner;

class Circle
{
    float side;
    public float getArea()
    {
        return (float) (Math.PI*Math.pow(side,2));
    }
    public float getPerimeter()
    {
        return (float) (2*Math.PI*side);
    }
}
public class pr_Q6
{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        Circle obj=new Circle();
        System.out.println("Enter the radius of the circle");
        obj.side=sc.nextFloat();
        System.out.println("The area of circle is: "+obj.getArea()+" and the perimeter of circle is: "+obj.getPerimeter());
        sc.close();
    }
}
