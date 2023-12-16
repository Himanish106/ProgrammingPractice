public class first_n_natural_number_using_recursion
{
    static void recursion_natural(int n) {
        if (n > 0) {
            recursion_natural(n - 1);
            System.out.println(n);
        }
    }

    public static void main(String[] args) {
        int n=10;
        recursion_natural(n);
    }
}
