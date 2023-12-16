import java.util.Scanner;

class Sphere
{
    private int radius;
    public void setRadius(int r)
    {
        radius=r;
    }

    public int getRadius() {
        return radius;
    }
    public double surfaceArea()
    {
        return 4*Math.PI*radius*radius;
    }
    public float Volume()
    {
        return (4f/3f)*(float) Math.PI*(float) Math.pow(radius,3);
    }
}
public class pr_Q5
{
    public static void main(String[] args) {
    Sphere obj=new Sphere();
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the radius of the circle ");
        obj.setRadius(sc.nextInt());
        System.out.printf("The radius of the circle is %d whose ",obj.getRadius());
        System.out.printf("Surface Area is %f and Volume is %f",obj.surfaceArea(),obj.Volume());
    }
}