import java.util.Scanner;

public class pr_Q3 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter your income in lakhs");
        float income=sc.nextFloat();
        float tax=0;
        if(income<=2.5f)
        {
            tax=tax+0;
        } else if (income>250000.0f&&income<=500000.0f) {
            tax=tax+0.05f*(income-2.5f);
        } else if (income>500000.0f&&income<=1000000.0f) {
            tax=tax+0.05f*(5.0f-2.5f);
            tax=tax+0.20f*(income-5.0f);
        } else if (income>1000000.0f) {
            tax=tax+0.05f*(5.0f-2.5f);
            tax=tax+0.20f*(10.0f-5.0f);
            tax=tax+0.30f*(income-10.0f);
        }
        System.out.println("The total tax paid by the employee is :"+tax);
    }
}
