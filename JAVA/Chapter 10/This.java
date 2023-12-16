class Keyword{
    int a;
//    Keyword(int v)
//    {
//        a=v;
//    }
Keyword(int a)
{
    this.a=a;
}

    public int getA() {
        return a;
    }

    public int returnOne()
    {
        return 1;
    }
}
public class This
{
    public static void main(String[] args) {
Keyword obj=new Keyword(25);
        System.out.println(obj.getA());
    }
}
