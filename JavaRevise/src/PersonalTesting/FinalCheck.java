/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package PersonalTesting;

final class A {

    void check() {
        System.out.println("This is check method from class A");
    }
}
//class B extends A{
//    
//} ---> Error because class which is declared as final cannot be inherited

class B {

  
    static void check() {
        System.out.println("This is check method from class B");
    }
}

class C extends B {

//    @Override
//    void check() {
//        System.out.println("This is check method from class C");
//    } ---> Static methods cannot be overriden
    static void check() {
        System.out.println("This is check method from class C");
    }
}

public class FinalCheck {

    public static void main(String[] args) {
//        A a=new B(); ---> Error
        B b = new C();
        b.check();
//      Output :- This is check method from class B. So this proves that static methods can be inherited but
//                cannot be overriden
        C.check();
    }
}
