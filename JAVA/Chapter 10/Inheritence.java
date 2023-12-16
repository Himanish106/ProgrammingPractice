class Base
{
    int x;

    public void setX(int x) {
        this.x = x;
    }

    public int getX() {
        return x;
    }
    public void printMe()
    {
        System.out.println("Hello Himanish I am coming from Base class");
    }
}
class Derived extends Base
{
    int y;

    public int getY() {
        return y;
    }

    public void setY(int y) {
        this.y = y;
    }
}
public class Inheritence
{
    public static void main(String[] args) {
    Base obj=new Base();
        System.out.println("Printing elements of Base Class");
        obj.setX(5);
        System.out.println(obj.getX());
        obj.printMe();
        Derived d=new Derived();
        System.out.println("Control is now in Derived Class");
        d.setX(43);
        System.out.println(d.getX());
        d.printMe();
    }
}
