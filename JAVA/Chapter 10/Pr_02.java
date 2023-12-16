import java.util.Scanner;

class Rectangle
{
    public int length,width,height;

    public void setLength(int length) {
        this.length = length;
    }

    public int getLength() {
        return length;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public int getWidth() {
        return width;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public int getHeight() {
        return height;
    }
    public int getArea()
    {
        return length*width;
    }
    public int getVolume()
    {
        return length*width*height;
    }
}
class Cuboid extends Rectangle
{
    @Override
    public int getArea() {
        return 2*((length*width)+(width*height)+(height*length));
    }
    public int getVolume()
    {
        return super.getVolume();
    }
}
public class Pr_02
{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter length,width,height");
        System.out.print("Length= ");
        int length= sc.nextInt();
        System.out.println();
        System.out.print("Width= ");
        int width= sc.nextInt();
        System.out.println();
        System.out.print("Height= ");
        int height= sc.nextInt();
        System.out.println();
        Cuboid obj=new Cuboid();
        obj.setLength(length);
        obj.setWidth(width);
        obj.setHeight(height);
        System.out.println("The area of cuboid is "+obj.getArea());
        System.out.println("The volume of cuboid is "+obj.getVolume());
        Rectangle ob=new Rectangle();
        ob.setLength(length);
        ob.setWidth(width);
        ob.setHeight(height);
        System.out.println("The area of rectangle is: "+ob.getArea());
        System.out.println("The volume of rectangle is: "+ob.getVolume());
    }
}
