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
public class String02 {
    public static void main(String[] args) {
        String a="Hello";
        System.out.println(a);
        a="Hii"; // Do not confuse here. We have not modified the given string i.e. String a="Hello". Here  
//      just the reference has been changed.  
        System.out.println(a);
        String modiString=a.concat(" How are you");
        System.out.println(a); // Original String has not been modified
        System.out.println(modiString);
    }
    
}
