class Rectangle
{
private int length;
private int breadth;
Rectangle()
{
    length=4;
    breadth=5;
}
Rectangle(int l,int b)
{
    length=l;
    breadth=b;
}

    public int getLength() {
        return length;
    }

    public int getBreadth() {
        return breadth;
    }
}
public class pr_Q4
{
    public static void main(String[] args) {
    Rectangle obj=new Rectangle(12,13);
        System.out.println(obj.getLength());
        System.out.println(obj.getBreadth());
    }
}
