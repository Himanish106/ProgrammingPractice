/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package JavaPrac.Strings.StringsAndStringBuilderAndStringBuffer;

/**
 *
 * @author Himanish
 */
public class String03 {

    public static void main(String[] args) {
        String a = "Hello";
        String b = "Hello";
        System.out.println(a == b); // Here this syntax is basically being used to check whether both the
//      references are pointing to the same memory location or not. This is the reason why we are getting
//      true as the output.     

        String c = new String("Hiii");
        String d = new String("Hiii");
//      Here we are explicitly creating 2 different objects. In this case The values are no longer stored
//      inside the String Pool.
        System.out.println(c == d); // Is returning false because 2 different memory locations has been created
        System.out.println(c.equals(d)); // Returning true because values are same.
    }
}
