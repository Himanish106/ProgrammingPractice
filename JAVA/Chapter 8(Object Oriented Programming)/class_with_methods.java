import java.util.Scanner;

class Employee2
{
    int id;
    String name;
    int salary;
    public void printDetails()
    {
        System.out.println("My name is: "+name);
        System.out.println("My id is: "+id);
    }
    public int getSalary()
    {
        return salary;
    }
}
public class class_with_methods
{
    public static void main(String[] args) {
    Employee2 himanish=new Employee2();
    Employee2 john=new Employee2();
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter salaries");
        himanish.salary= sc.nextInt();
        john.salary=sc.nextInt();
//        Setting attributes for Himanish
        System.out.println("Details of Himanish");
    himanish.name="Himanish Das";
    himanish.id=24;
    int salary= himanish.salary;
    himanish.printDetails();
        System.out.printf("Salary of Himanish is %d\n",salary);
//    Setting attributes for John
        System.out.println("Details of John");
    john.name="John Paul";
    john.id=50;
    int salary2= john.salary;
    john.printDetails();
    System.out.printf("Salary of John is %d",salary2);
    sc.close();
    }
}