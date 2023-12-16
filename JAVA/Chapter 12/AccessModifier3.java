import AccessModifier.Accessmodifier2.AccessModifier2;

class Subclass extends AccessModifier2 {
    public void meth2() {
        // System.out.println(x);
        // System.out.println(y);
        // System.out.println(z);
        // System.out.println(a);
    }
}

public class AccessModifier3 {
    public static void main(String[] args) {
        // AccessModifier2 obj = new AccessModifier2();
        // System.out.println(obj.x);
        // System.out.println(obj.y);
        // System.out.println(obj.z);
        // System.out.println(obj.a);
        Subclass s = new Subclass();
        // s.meth2();
    }
}
