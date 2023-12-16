interface Callback{
    void callback(int param);
}
class Client implements Callback
{
    public void callback(int p)
    {
      System.out.println("callback called with "+p);
    }
    void nonIfaceMeth()
    {
        System.out.println("Classes that implement interfaces "+"may also define other members, too.");
    }
}
// Another implementation of Callback
class AnotherClient implements Callback
{
    public void callback(int p)
    {
        System.out.println("Another version of callback");
        System.out.println("p squared is "+(p*p));
    }
}
public class Interface2 {
    public static void main(String[] args) {
        Callback c=new Client();
        AnotherClient ob=new AnotherClient();
        // Client c=new Client();
        c.callback(42);
        // c.nonIfaceMeth();---> Since address is of Callback class so nonIfaceMeth() cannot be called
        c=ob;
        c.callback(42);
    }
}
