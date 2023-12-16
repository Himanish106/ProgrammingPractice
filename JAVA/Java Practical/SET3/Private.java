/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package SET3;

/**
 *
 * @author Gablu
 */
class Parent {

    private void show() {
        System.out.println("I am a private method show of parent class");
    }
}

class Child extends Parent {

    void display() {
        System.out.println("This is method display of child class");
    }
}

public class Private {

    public static void main(String args[]) {
        Child obj = new Child();
        try {
            obj.display();
            obj.show();
        } catch (Exception e) {
            System.out.println("Cannot access private method");
        }
    }
}
