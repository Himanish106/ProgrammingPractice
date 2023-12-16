import java.util.Scanner;

public class Student2 {
    String name;
    int roll;
    long phoneNum;

    Student2(String name, int roll, long phoneNum) {
        this.name = name;
        this.roll = roll;
        this.phoneNum = phoneNum;
    }

    static boolean isEqual(Student2 ob1, Student2 ob2) {
        if (ob1.name == ob2.name && ob1.roll == ob2.roll && ob1.phoneNum == ob2.phoneNum)
            return true;
        else
            return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter name of the student");
        String name = sc.nextLine();
        System.out.println("Enter the roll of the student");
        int roll = sc.nextInt();
        System.out.println("Enter the phone number of the student");
        long phoneNum = sc.nextLong();
        Student2 ob1 = new Student2(name, roll, phoneNum);
        Student2 ob2 = new Student2(name, roll, phoneNum);
        System.out.println(isEqual(ob1, ob2));
    }
}
