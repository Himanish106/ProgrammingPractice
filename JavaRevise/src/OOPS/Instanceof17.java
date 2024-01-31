package OOPS;
class A{
    int num;

    public A(int num) {
        this.num = num;
    }
    
}
class B extends A{

    public B(int num) {
        super(num);
    }
    
}
public class Instanceof17 {
    public static void main(String[] args) {
        B obj= new B(43);
        A obj2=new A(21);
        System.out.println(obj instanceof B);
        System.out.println(obj instanceof A);
        System.out.println(obj instanceof Object);
        System.out.println(obj2 instanceof B);
    }
}
