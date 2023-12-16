class MethodOverload
{
    public void helloWorld()
    {
        System.out.println("Hello World");
    }
    public void helloWorld(int a)
    {
        System.out.println("Hello World"+" "+a);
    }
    public void helloWorld(int a,int b)
    {
        System.out.println("Hello World"+" "+a+" "+b);
    }
}
public class MethodOverloading
{
    public static void main(String[] args) {
        MethodOverload obj=new MethodOverload();
        obj.helloWorld();
        obj.helloWorld(50);
        obj.helloWorld(22,52);
    }
}
