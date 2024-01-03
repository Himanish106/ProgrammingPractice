/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OOPS;

/**
 *
 * @author hp
 */
public class StaticMethods08 {

    public static void main(String[] args) // Main is a static method as explained in our previous file
    {
//        greeting(); void greeting is a non static method which cannot be referenced from a static context. Non static methods require an instance
        fun();
        callGreeting();
        StaticMethods08 callNonStatic2=new StaticMethods08();
        callNonStatic2.callGreeting2();
    }

//  This is not dependent on objects
    static void fun() {
//        greeting();---> You can't use this because it requires an instance but the function you are using it in does not depend on instances.
        System.out.println("Having Fun!");
    }

//  Remember that something which is not static doesn't belongs to an object
    void greeting() {
        System.out.println("Hello I am method greeting");
    }
//    So if we want to call greeting method we can have 2 possible approaches
//   Approach 1
    static void callGreeting() {
        StaticMethods08 callNonStatic = new StaticMethods08();
        callNonStatic.greeting();
    }
//  Approach 2
    void callGreeting2(){
        greeting();
    }
}
