import java.util.Scanner;

public class chap_1_pr_Q4 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the distance in kilometres");
        float kilometres= sc.nextFloat();
        System.out.println("Converting kilometres to miles");
        float miles=kilometres*0.621371f;
        System.out.println(kilometres+" Kilometres is equal to "+miles+" miles");
    }
}
