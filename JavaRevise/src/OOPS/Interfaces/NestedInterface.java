package OOPS.Interfaces;
class Nested{
//    Nested Interface
    public interface nestedInterface{
        boolean isOdd(int num);
    }
    
}

class Implementation implements Nested.nestedInterface{

    @Override
    public boolean isOdd(int num) {
       return (num & 1) == 1;
    }
    
}
public class NestedInterface {
    public static void main(String[] args) {
        Implementation n=new Implementation();
        System.out.println(n.isOdd(4));
    }
}
