import java.util.Scanner;

public class Student {
    String name;
    int rollno, total_marks;
    int no_of_subjects;

    public void getData(String name, int rollno, int total_marks, int no_of_subjects) {
        this.name = name;
        this.rollno = rollno;
        this.total_marks = total_marks;
        this.no_of_subjects = no_of_subjects;
    }

    public void showData() {
        System.out.println("The name of the student is " + name + " " + "and roll number is " + rollno);
        System.out.println("The total number of subjects are " + no_of_subjects + " "
                + "and the total marks obtained is " + total_marks);
    }

    public void average() {
        int avg;
        avg = total_marks / no_of_subjects;
        System.out.print("The average of all the subjects are: " + avg);
    }

    public static void main(String[] args) {
        String name;
        int rollno, total_marks;
        int no_of_subjects;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the name of the student");
        name = sc.nextLine();
        System.out.println("Enter the roll number of the student");
        rollno = sc.nextInt();
        System.out.println("Enter the total marks of the student");
        total_marks = sc.nextInt();
        System.out.println("Enter the number of subjects:");
        no_of_subjects = sc.nextInt();
        Student obj = new Student();
        obj.getData(name, rollno, total_marks, no_of_subjects);
        obj.showData();
        obj.average();
        sc.close();
    }
}
