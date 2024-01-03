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
public class StaticBlock09 {

    static int a = 4;
    static int b;
// static block only runs once when the object of the class is created for the first time i.e. when the class is loaded.
    static {
        System.out.println("I am in static block");
        b = a * 10;
    }

    public static void main(String[] args) {
        StaticBlock09 aa = new StaticBlock09();
        System.out.println(StaticBlock09.a + " " + StaticBlock09.b);
        StaticBlock09.b += 3;
        StaticBlock09 bb = new StaticBlock09();
        System.out.println(StaticBlock09.a + " " + StaticBlock09.b);
    }
}
