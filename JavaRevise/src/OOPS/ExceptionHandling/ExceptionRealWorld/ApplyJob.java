package OOPS.ExceptionHandling.ExceptionRealWorld;

import java.util.Scanner;

public class ApplyJob {

    public static void main(String[] args) {
        Eligibility e = new Eligibility();
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your name:");
        String name = sc.nextLine();
        e.setName(name);
        System.out.println("Enter your age:");
        int age = sc.nextInt();
        sc.nextLine();
        System.out.println("Enter your degree");
        String degree = sc.nextLine();
        try {
            e.settingAge(age);
            e.gettingAge();
            e.settingDegree(degree);
            e.gettingDegree();
            System.out.println("Hi! " + e.gettingName() + " Your age is " + e.gettingAge() + " Your degree is " + e.gettingDegree() + ". You have successfully applied for the recruitment drive");
        } catch (AgeException | DegreeException  ex) {
            System.out.println(ex.getMessage());
        }
    }
}
