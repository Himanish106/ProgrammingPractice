import java.util.Scanner;

class MyEmployee{
    private int id;
    private String name;

    public void setName(String n) {
        name = n;
    }

    public String getName() {
        return name;
    }

    public int getId() {
        return id;
    }
    public void setId(int i)
    {
        id=i;
    }
}
public class private_access_modifier
{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        MyEmployee obj=new MyEmployee();
//        obj.name="Himanish";
//        obj.id=65;----> Throws an error due to private access modifier
//        obj.setName("Himanish Das");
//        System.out.println(obj.getName());
//        obj.setId(56);
//        System.out.println(obj.getId());
        System.out.println("Enter a name");
        obj.setName(sc.nextLine());
        System.out.println("Enter ID");
        obj.setId(sc.nextInt());
        System.out.println("My name is "+obj.getName()+" and my id is "+obj.getId());
    }
}
