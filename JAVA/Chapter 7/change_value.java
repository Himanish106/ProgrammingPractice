public class change_value
{
    static void change(int a)
    {
        a=98;
    }
    static void change2(int[] a)
    {
        a[0]=100;
    }
    public static void main(String[] args) {
//        int x=45;
//       change(x);
//        System.out.println(x);
//        Value will not change as only a copy is passed
        int []x={25,27,28,54,45,60};
        change2(x);
        System.out.println("The value of x after running: "+x[0]);
    }
}
