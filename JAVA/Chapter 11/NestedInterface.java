// A nested interface example

// This class contains a member interface
class AA {
    public interface NestedIF {
        boolean isNotNegative(int x);
    }

    public void random() {
        System.out.println("Random method");
    }
}

// B implements the nested interface.
class BB implements AA.NestedIF {
    public boolean isNotNegative(int x) {
        return x < 0 ? false : true;
    }

    public void rand() {
        System.out.println("Random method 2");
    }
}

public class NestedInterface {
    public static void main(String[] args) {
        // use a nested interface reference
        AA.NestedIF nif = new BB();
        // nif.random() ---> This method cannot be called because reference is of nested
        // interfaced method
        // nif.rand() ---> This method cannot be called because reference is of nested
        // interfaced method
        System.out.println(nif.isNotNegative(20));
        System.out.println(nif.isNotNegative(-20));
    }
}
