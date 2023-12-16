abstract class Parent
{
    public Parent()
    {
        System.out.println("I am a constructor of Parent class");
    }
    public void sayHello()
    {
        System.out.println("Hello");
    }
    abstract public void greet();
    abstract public void greet2();
}
class Child extends Parent{
    @Override
    public void greet() {
        System.out.println("Good Morning");
    }

    @Override
    public void greet2() {
        System.out.println("Good Afternoon");
    }
}
abstract class Child2 extends Parent
{
    public void th() {
        System.out.println("Good Evening");
    }
}
public class AbstractClass
{
    public static void main(String[] args) {
//        Parent p=new Parent();---> Object of abstract class cannot be created hence error
        Child c=new Child();
        c.greet();
        c.sayHello();
//        Child2 c2=new Child2();--->Error
    }
}
