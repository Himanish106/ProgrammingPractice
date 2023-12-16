
class MyEmployee2{
    private int id;
    private String name;

 MyEmployee2()
{
     id=45;
    name="Abhishek";
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
public class constructor
{
    public static void main(String[] args) {
        MyEmployee2 obj=new MyEmployee2();
//        obj.setName("Himanish");
//        obj.setId(56);
        System.out.println(obj.getName());
        System.out.println(obj.getId());
    }
}
