import java.util.Scanner;

public class exercise1 {
    public static void main(String[] args) {
        System.out.println("Enter the name and marks of the student");
        Scanner sc=new Scanner(System.in);
        System.out.print("Name of the student: ");
        String name=sc.nextLine();
        System.out.print("Enter the marks in english: ");
        float english=sc.nextFloat();
        System.out.print("Enter the marks in physics: ");
        float physics=sc.nextFloat();
        System.out.print("Enter the marks in chemistry: ");
        float chemistry=sc.nextFloat();
        System.out.print("Enter the marks in mathematics: ");
        float mathematics=sc.nextFloat();
        System.out.print("Enter the marks in biology: ");
        float biology=sc.nextFloat();
        System.out.print("Enter the full marks of the particular subject: ");
        float full_marks=sc.nextFloat();
        float sum_of_5_subjects=english+physics+chemistry+mathematics+biology;
        float total_full_marks_of_5_subjects=5*full_marks;
        float percentage=(sum_of_5_subjects/total_full_marks_of_5_subjects)*100;
        System.out.println("Total marks obtained by "+name+" is " +sum_of_5_subjects);
        System.out.print("The total percentage of 5 subjects are : "+percentage);
    }
}
