package OOPS.Generics;

public class GenericMethods {
   static <E> void printData(E data){
    System.out.println(data);
   }
    public static void main(String[] args) {
        printData("Hello");
        printData(1234);
        printData(true);
        printData(123456789000006456l);

        GenericMethods obj = new GenericMethods();
        System.out.println(obj);
        obj.showValue(123);
    }
    // Bounded Generics
    <T extends Number> void showValue(T data){
        System.out.println(data);
    }
    @Override
    public String toString() {
        return "Demo of Generic Methods";
    }

}
