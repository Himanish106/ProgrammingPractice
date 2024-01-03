package OOPS;

public class Human {

    int age;
    String name;
    int salary;
    boolean married;
    static int population = 0;

    static void message() {
//        System.out.println(age); ---> age cannot be accessed because by default the variables declared in a class have a non static reference
//        System.out.println(this.age); ----> this always refers to the current reference of the object hence cannot be used. 
    }

    public Human(int age, String name, int salary, boolean married) {
        this.age = age;
        this.name = name;
        this.salary = salary;
        this.married = married;
//        this.population += 1; ---> This is not wrong. This is because java compiler at first looks whether this variable is the part of a particular object or not. If it is not then java then looks whether it is a part of the class or not. But we should not be using it. The correct concept should be
        Human.population += 1;
    }

}
