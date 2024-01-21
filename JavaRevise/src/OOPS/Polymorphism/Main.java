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
public class Main {
    public static void main(String[] args) {
//        Shapes s=new Shapes();
//        s.area();
        Shapes sq=new Square();
        sq.area();
//    Suppose if we do not mention the area method in the parent class we will be getting an error because 
//    the reference is of type Shape and if shape does not contain method area then we will be getting an error
    

//   This is known as dynamic method dispatch because the call to an overriden method is resolved at run time.

//  If any method is declared as final it cannot be overriden. Also remember that if a class is declared as
//  final then it cannot be extended or inherited
    }
}
