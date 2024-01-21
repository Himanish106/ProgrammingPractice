/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package PersonalTesting;

class Parent {
void area(){
    System.out.println("Method area1 from parent");
}
}

class Child extends Parent {
void area(){
    System.out.println("Method area2 from child");
}
}

public class ReferenceCheck {
    public static void main(String[] args) {
        Parent p1=new Child();
        p1.area();
    }
}
