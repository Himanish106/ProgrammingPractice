import java.util.Scanner;
public class else_if_ladder
{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter age");
        int age= sc.nextInt();
        if(age>=60)
        {
            System.out.println("You are highly experienced");
        }
        else if (age>=40 && age<60)
        {
            System.out.println("You are well experienced");
        }
        else if(age>=20 && age<40)
        {
            System.out.println("You are a bit experienced");
        }
        else {
            System.out.println("Not experienced");
        }
    }
}
