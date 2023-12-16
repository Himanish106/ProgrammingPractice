import java.util.Scanner;

public class chap_1_pr_Q2 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the marks of subject 1");
        float sub_1=sc.nextFloat();
        System.out.println("Enter the marks of subject 2");
        float sub_2= sc.nextFloat();
        System.out.println("Enter the marks of subject 3");
        float sub_3= sc.nextFloat();
        float cgpa=(sub_1+sub_2+sub_3)/30;
        System.out.print("The cgpa of 3 subjects are: "+cgpa);
    }
}
