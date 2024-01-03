/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OOPS;

public class StaticVariables07 {

    public static void main(String[] args) {
        Human himanish = new Human(21, "Himanish", 15000, false);
        System.out.println(Human.population);
        Human sayan = new Human(21, "Sayan", 15000, false);
        System.out.println(Human.population);
        System.out.println(himanish.age);
//        System.out.println(himanish.population);
//        System.out.println(sayan.population); ---> Not wrong please refer to Human.java file for understanding
    }
}
//NOTE: public static void main(String[] args) is declared as static because we do not need to create the object of that particular class to run the main method. main method is the first method which runs when a Java program is executed.