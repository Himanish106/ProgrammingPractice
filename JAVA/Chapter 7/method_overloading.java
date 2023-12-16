public class method_overloading
{
    static void foo()
    {
        System.out.println("Good Morning Bro!");
    }
    static void foo(int a)//---> int a is a parameter
    {
        System.out.println("Good Morning "+a+" Bro!");
    }
    static void foo(int a,int b)
    {
        System.out.println("Good Morning "+a+" "+b+" Bro");
    }

    public static void main(String[] args) {
        foo();
        foo(3000); // 3000 is an argument
        foo(4000,5000);
    }
}
