import java.util.Scanner;

public class Finally {
    public static int div(int a, int b) {
        try {
            int c = a / b;
            return c;
         } catch (Exception e) {
            System.out.println(e);
        } 
        finally
        {
            System.out.println("End of program");
        }
        
        return -1;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a, b, c;
        System.out.println("Enter 2 numbers");
        a = sc.nextInt();
        b = sc.nextInt();
        c = div(a, b);
        System.out.println(c);
    }
}
