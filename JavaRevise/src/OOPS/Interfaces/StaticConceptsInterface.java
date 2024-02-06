package OOPS.Interfaces;
interface AA {

    // Static Interface methods should always have a body
    static void staticGreet(){
        System.out.println("This is a static greet method defined within interface AA");
    }
    void greet();
}

interface BB extends AA {

    void hello();
}

class StaticConcept implements AA, BB {

    @Override
    public void greet() {
        System.out.println("This is method greet");
    }

    @Override
    public void hello() {
        System.out.println("This is method hello");
    }

}
public class StaticConceptsInterface {
    public static void main(String[] args) {
        AA.staticGreet();
    }
}
