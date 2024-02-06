package OOPS;
/* Abstract classes cannot be declared as final because final classes cannot be inherited. */
abstract class Parent {

//   If you want you can create the constructor of an abstract class.
    int age;
    
    public Parent(int age) {
        this.age = age;
    }
    
    abstract void career(String name); // So if a class contains an abstract method the class should also be declared abstract.

    abstract void partner(String name);
    
//  Since static methods cannot be overriden, so there is not such concept of abstract static methods.
//  This is because abstract methods needs to be overriden. 
    
    static void greeting(){
        System.out.println("Hello");
    }
    
    void normal(){
        System.out.println("Normal Method");
    }
}

class Son extends Parent {
//    If any class extends an abstract class then the child class should compulsorily override the abstract methods

    Son(int age) {
        super(age);
    }

    @Override
    void career(String name) {
        System.out.println("I am going to be a " + name);
    }
    
    @Override
    void partner(String name) {
        System.out.println("I love " + name + " whose age is " + age);
    }
    
    void childTest(){
        System.out.println("This is a child test method");
    }
}

public class AbstractClass18 {
    
    public static void main(String[] args) {
        Parent s = new Son(32);
        s.career("Coder");
        s.partner("Manali");
        
//        Parent p=new Parent(55); ---> You cannot create the object of an abstract class. 
/*   The reason of not creating the objects of abstract class is that:

     Abstract classes contains abstract methods which does not have a body. So if we had been able to
     create the object of abstract classes then obviously we would be facing an error because if we try
     to call the methods with the help of the object created then we would face the error as it does not
     contain the body. This is the reason why you cannot create the abstract constructors.
*/     

    Parent.greeting();
    s.normal();
    }
}
