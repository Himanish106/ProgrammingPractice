class Employee1
{
    byte id;
    String name;
//    id and name these are all attributes

}
public class custom_class {
    public static void main(String[] args) {
        System.out.println("This is our Custom Class");
        Employee1 himanish=new Employee1(); // Instantiating a new Employee object
        // Setting the properties
        himanish.name="Himanish Das";
        himanish.id=23;
        System.out.println(himanish.name);
        System.out.println(himanish.id);
    }
}
