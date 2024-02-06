/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OOPS.Interfaces;

interface A {

    void greet();
}

interface B extends A {

    void hello();
}

class Result implements A, B {

    @Override
    public void greet() {
        System.out.println("This is method greet");
    }

    @Override
    public void hello() {
        System.out.println("This is method hello");
    }

}

public class ExtendingInterfaces {

    public static void main(String[] args) {
        Result s = new Result();
        s.greet();
        s.hello();
    }

}
