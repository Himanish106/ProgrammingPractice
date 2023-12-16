import java.util.Scanner;

class MyEmployee3{
    private int id;
    private String name;

    public MyEmployee3(String n,int i)
    {
        id=i;
        name=n;
    }
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
public class passing_arguments_to_the_constructor
{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter name");
        String name= sc.nextLine();
        System.out.println("Enter ID");
        int id=sc.nextInt();
        MyEmployee3 obj=new MyEmployee3(name, id);
//        obj.setName("Himanish");
//        obj.setId(56);
        System.out.println(obj.getName());
        System.out.println(obj.getId());
    }
}
