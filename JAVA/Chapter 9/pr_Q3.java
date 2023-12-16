import java.util.Scanner;

class Cylinder3
{
    private int radius;
    private int height;

   Cylinder3(int r,int h){
       radius=r;
       height=h;
   }

    public int getRadius() {
        return radius;
    }

    public int getHeight() {
        return height;
    }
}
public class pr_Q3
{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the radius and height of the Cylinder");
        Cylinder3 obj=new Cylinder3(sc.nextInt(), sc.nextInt());
        System.out.println("The radius of the cylinder is "+obj.getRadius());
        System.out.println("The height of the cylinder is "+obj.getHeight());
    }
}