class Phone{
    public void showTime()
    {
        System.out.println("Time is 11:45 am");
    }
    public void on()
    {
        System.out.println("Turning on Phone...");
    }
}
class Smartphone extends Phone{
    public void music()
    {
        System.out.println("Playing Music...");
    }

    public void on() {
        System.out.println("Turning on Smartphone....");
    }
}
public class DynamicMethodDispatch
{
    public static void main(String[] args) {
//    Phone obj=new Phone(); // Allowed
//    Smartphone obj1=new Smartphone(); //Allowed
//    obj1.showTime();
        Phone obj=new Smartphone(); //Yes it is allowed. This is called upcasting.
//        Smartphone obj2=new Phone(); //Not allowed
        obj.showTime();
        obj.on(); /* obj.on() is an overriden method. Since object created is of the sub-class Smartphone
                 hence class Smartphone gets the priority. So we obtain the output of the overriden method of
                 class Smartphone*/
//        obj.music(); //Not Allowed because the reference or the address of the object is the superclass(Phone)
    }
}
