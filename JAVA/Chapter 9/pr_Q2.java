import java.util.Scanner;

class Cylinder2
{
    private int radius;
    private int height;

    public void setRadius(int r) {
        radius=r;
    }

    public int getRadius() {
        return radius;
    }

    public void setHeight(int h) {
        height = h;
    }

    public int getHeight() {
        return height;
    }
    public double surfaceArea()
    {
        return 2*Math.PI*(height+radius);
    }
    public double volume()
    {
        return Math.PI*radius*radius*height;
    }
}
public class pr_Q2
{
    public static void main(String[] args) {
        Cylinder2 obj=new Cylinder2();
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the radius of the cylinder");
                        obj.setRadius(sc.nextInt());
                        System.out.println("The radius of the cylinder is "+obj.getRadius());
        System.out.println("Enter the height of the cylinder");
                        obj.setHeight(sc.nextInt());
                        System.out.println("The height of the cylinder is "+obj.getHeight());
                        System.out.println("The surface area of the cylinder is "+obj.surfaceArea());
                        System.out.println("The Volume of the cylinder is "+obj.volume());
    }
}