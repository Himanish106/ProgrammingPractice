class Test2 {
    int a, b;

    Test2(int i, int j) {
        a = i;
        b = j;
    }

    void meth(Test2 ob) {
        ob.a = a * 2;
        ob.b = b / 2;
    }
}

public class CallByReference {
    public static void main(String[] args) {
        Test2 t = new Test2(15, 20);
        System.out.println("t.a and t.b before call: " + t.a + " " + t.b);
        t.meth(t);
        System.out.println("t.a and t.b after call: " + t.a + " " + t.b);
    }
}
