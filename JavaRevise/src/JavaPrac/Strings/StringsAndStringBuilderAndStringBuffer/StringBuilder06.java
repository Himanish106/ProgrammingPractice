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
public class StringBuilder06 {

    public static void main(String[] args) {
        StringBuilder stringBuilder = new StringBuilder();
        for (int i = 0; i < 26; i++) {
            char ch = (char) ('a' + i);
            stringBuilder.append(ch);
        }
        System.out.println(stringBuilder);
//      Now in this case what happens is that each and every time a new object is not being created like it
//        was happening before. We are appending the string in a single object only.   
    }
}
