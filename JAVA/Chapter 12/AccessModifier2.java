package AccessModifier.Accessmodifier2;

public class AccessModifier2 {
    public int x = 5;
    protected int y = 45;
    int z = 6;
    private int a = 78;

    public void meth1() {
        System.out.println(x);
        System.out.println(y);
        System.out.println(z);
        System.out.println(a);
    }
    public static void main(String[] args) {
        System.out.println("I am main method of class AccessModifier2");
    }
}