class Base2
{
    Base2(){
        System.out.println("I am a constructor");
    }
    Base2(int a)
    {
        System.out.println("I am an overloaded constructor with value of a as: "+a);
    }
}
class Derived2 extends Base2
{
    Derived2(){
//        super(3);
        System.out.println("I am a derived class constructor");
    }
    Derived2(int a,int b)
    {
        super(a);
        System.out.println("I am an overloaded constructor of derived class with value of b as "+b);
    }
}
class ChildOfDerived extends Derived2
{
    ChildOfDerived()
    {
        System.out.println("I am a child of derived class constructor");
    }
    ChildOfDerived(int x,int y,int z)
    {
        super(x,y);
        System.out.println("I am an overloaded constructor of the child of derived class with value of z as: "+z);
    }
}
public class Constructors_during_constructor_overloading
{
    public static void main(String[] args) {
//        Base2 b=new Base2();
//        Derived2 d=new Derived2();
//        Derived2 d=new Derived2(14,15);
//        ChildOfDerived cd=new ChildOfDerived();
        ChildOfDerived cd=new ChildOfDerived(12,13,14);
    }
}

