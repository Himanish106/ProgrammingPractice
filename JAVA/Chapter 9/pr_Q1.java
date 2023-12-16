class Cylinder
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
}
public class pr_Q1
{
    public static void main(String[] args) {
        Cylinder obj=new Cylinder();
        obj.setRadius(5);
        System.out.println("The radius of the cylinder is "+obj.getRadius());
        obj.setHeight(10);
        System.out.println("The height of the cylinder is "+obj.getHeight());
    }
}
