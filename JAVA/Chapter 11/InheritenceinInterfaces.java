interface SampleInterface {
    void meth1();

    void meth2();
}

interface ChildSampleInterface extends SampleInterface {
    // void meth1();// The syntax is correct but according to DRY(Do not repeat
    // yourself) principle we must
    // try not to repeat the same method so we'll use inheritence in interface
    // void meth2();
    void meth3();

    void meth4();
}
class MySampleClass implements ChildSampleInterface{
    public void meth1() {
        System.out.println("This is method 1");
    }

    public void meth2() {
        System.out.println("This is method 2");
    }

    public void meth3() {
        System.out.println("This is method 3");
    }

    public void meth4() {
        System.out.println("This is method 4");
    }
}

public class InheritenceinInterfaces {
    public static void main(String[] args) {
        MySampleClass obj = new MySampleClass();
        obj.meth1();
        obj.meth2();
        obj.meth3();
        obj.meth4();
    }
}
