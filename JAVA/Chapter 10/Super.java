class Keyword2 {
    int a;

    //    Keyword(int v)
//    {
//        a=v;
//    }
    Keyword2(int a) {
        this.a = a;
    }

    public int getA() {
        return a;
    }

    public int returnOne() {
        return 1;
    }
}
    class Child extends Keyword2{
        Child(int c)
        {
            super(c);
            System.out.println("I am a constructor");
        }
}
public class Super
{
    public static void main(String[] args) {
        Keyword2 obj=new Keyword2(25);
        Child d=new Child(20);
        System.out.println(obj.getA());
        System.out.println(d.getA());
    }
}
