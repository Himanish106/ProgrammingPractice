class Overload {
    void test() {
        System.out.println("Non Parametreized method");
    }

    void test(int a, int b) {
        System.out.println(a + " " + b);
    }

    double test(double a) {
        System.out.println(a);
        return a * a;
    }
}
