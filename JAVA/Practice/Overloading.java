public class Overloading {
    public static void main(String[] args) {
        Overload obj = new Overload();
        obj.test();
        obj.test(42, 47);
        // double result = obj.test(123.54);
        System.out.println(obj.test(123.25));
    }
}
