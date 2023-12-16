class cellphone
{
    public void ring()
    {
        System.out.println("Ringing....");
    }
    public void vibrate()
    {
        System.out.println("Vibrating....");
    }
    public void callFriend()
    {
        System.out.println("Calling Abhishek....");
    }
}
public class pr_Q2
{
    public static void main(String[] args) {
        cellphone obj=new cellphone();
        obj.ring();
        obj.vibrate();
        obj.callFriend();
    }
}
