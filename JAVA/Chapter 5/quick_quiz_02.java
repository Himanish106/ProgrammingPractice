import java.util.Scanner;

public class quick_quiz_02
{
    public static void main(String[] args) {
    int n;
        Scanner sc =new Scanner(System.in);
        System.out.println("Enter range");
        n=sc.nextInt();
        int i=1;
        do {
            System.out.println(i);
            i++;
        }
        while (i<=n);
    }
}
