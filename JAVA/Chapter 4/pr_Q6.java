import java.util.Scanner;

public class pr_Q6 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter website");
        String website=sc.next();
        if (website.endsWith(".com"))
            System.out.println("This is a commercial website");
        else if (website.endsWith(".org"))
            System.out.println("This is an organisational website");
        else if (website.endsWith(".in"))
            System.out.println("This is an Indian website");
    }
}
