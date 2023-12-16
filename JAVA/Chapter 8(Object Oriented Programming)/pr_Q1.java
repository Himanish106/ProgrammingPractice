import java.util.Scanner;

class Employee
{
    int Salary;
    String name;
    Employee(){
        System.out.println("Employee");
    }
    public int getSalary() {
        return Salary;
    }

    public String getName() {
        return name;
    }

    public void setName(String n) {
        name = n;
    }
}
public class pr_Q1
{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        Employee obj=new Employee();
        System.out.println("Enter employee's name");
        obj.name= sc.nextLine();
        obj.setName(obj.name);
        System.out.println("Enter employee's Salary");
        obj.Salary= sc.nextInt();
        String Name=obj.getName();
        int value= obj.getSalary();
        System.out.println("The name of the employee is "+Name+" and his salary is "+value);
        sc.close();
    }
}
