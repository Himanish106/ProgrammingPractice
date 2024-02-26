/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package JavaPrac.Strings.StringsAndStringBuilderAndStringBuffer;

import java.util.ArrayList;

/**
 *
 * @author Himanish
 */
public class StringOperators04 {

    public static void main(String[] args) {
        System.out.println('a' + 'b'); // 195 because 97+98=195
        System.out.println("a" + "b"); //ab
        System.out.println('a' + 1); //98
        System.out.println("a" + 1); //a1
        System.out.println("a"+new ArrayList<>());//a[]
//      So by default in each case the toString method gets called.  
//        System.out.println(new Integer(56)+new ArrayList<>()); ---> This gives an error
/*     The reason for this error is the + operator works only for primitives. If we want to use this with
       objects there must be atleast 1 string.  
*/
       System.out.println(new Integer(56)+""+new ArrayList<>()); // This is ok as there is atleast 1 string
    }

}
