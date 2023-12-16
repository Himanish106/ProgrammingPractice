import java.util.Scanner;

public class Employee {
    String name;
    int basicSalary;
    double netSalary;

    Employee() {
        name = "";
        basicSalary = 0;
        netSalary = 0.0;
    }

    Employee(Employee obj) {
        this.name = obj.name;
        this.basicSalary = obj.basicSalary;
        this.netSalary = obj.netSalary;
    }

    Employee calculate(int bs, int pf, int alw, Employee ob) {
        double net = bs + (bs * alw / 100) - (bs * pf / 100);
        ob.netSalary = net;
        return ob;
    }

    public static void main(String[] args) {
        Employee e = new Employee();
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the name of the employee");
        e.name = sc.nextLine();
        System.out.println("Enter the basic salary of the employee");
        e.basicSalary = sc.nextInt();
        System.out.println("Enter the pf% for the employee");
        int pf = sc.nextInt();
        System.out.println("Enter the allowance % given to the employee");
        int alw = sc.nextInt();
        Employee ob2 = new Employee(e.calculate(e.basicSalary, pf, alw, e));
        System.out.println("Employee name : " + ob2.name + "\nEmployee net Salary : " + ob2.netSalary);
    }
}
