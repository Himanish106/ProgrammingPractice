//The switch variable can be an integer a character or even a String

// Demo for an integer
//import java.util.Scanner;
//
//public class switch_case {
//    public static void main(String[] args) {
//        Scanner sc=new Scanner(System.in);
//        System.out.println("Enter age");
//        int age=sc.nextInt();
//        switch (age)
//        {
//            case 18:
//                System.out.println("You are going to become an adult!");
//                break;
//            case 23:
//                System.out.println("You are going to get a job!");
//                break;
//            case 60:
//                System.out.println("You will retire!");
//                break;
//            default:
//                System.out.println("Enjoy your life!");
//        }
//        System.out.println("This is a demo of switch case");
//    }
//}

// Demo for a character

//import java.util.Scanner;
//
//public class switch_case {
//    public static void main(String[] args) {
//        Scanner sc=new Scanner(System.in);
//        System.out.println("Enter alphabet");
//        char age=sc.next().charAt(0);
//        switch (age)
//        {
//            case 'c':
//                System.out.println("You are going to become an adult!");
//                break;
//            case 'a':
//                System.out.println("You are going to get a job!");
//                break;
//            case 'd':
//                System.out.println("You will retire!");
//                break;
//            default:
//                System.out.println("Enjoy your life!");
//        }
//        System.out.println("This is a demo of switch case");
//    }
//}

// Demo for a string

import java.util.Scanner;

public class switch_case {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter name");
        String age=sc.next();
        switch (age) {
            case "Shubham" -> System.out.println("You are going to become an adult!");
            case "Himanish" -> System.out.println("You are going to get a job!");
            case "Abhishek" -> System.out.println("You will retire!");
            default -> System.out.println("Enjoy your life!");
        }
        System.out.println("This is a demo of switch case");
    }
}
