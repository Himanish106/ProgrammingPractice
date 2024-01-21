/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OOPS.Polymorphism;

/**
 *
 * @author Himanish
 */
public class CompileTimePolymorphism {
    int sum(int a) {
        return a + a;
    }

    int sum(int a, int b) {
        return a + b;
    }

    int sum(int a, int b, int c) {
        return a + b + c;
    }
    public static void main(String[] args) {
        CompileTimePolymorphism overload=new CompileTimePolymorphism();
        System.out.println(overload.sum(10));
        System.out.println(overload.sum(10,20));
        System.out.println(overload.sum(10,20,30));
    }
}

// Method Overloading is also called as compile time polymorphism because during compile time the compiler
// decides which method to run depending upon the parameters during the compile time