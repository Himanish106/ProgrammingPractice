class Employee3{
    int salary;
    public Employee3()
    {
        salary =500;
    }
    public Employee3(int s)
    {
        salary=s;
    }
    public int getSalary() {
        return salary;
    }

}
public class quick_quiz_01
{
    public static void main(String[] args) {
       Employee3 obj=new Employee3(10000);
        System.out.println(obj.getSalary());
    }
}
