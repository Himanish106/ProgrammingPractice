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
public class StringBuffervsString {

    public static String concatWithString() {
        String t = "Java";
        for (int i = 0; i < 10000; i++) {
            t = t + "Programming";
        }
        return t;
    }

    public static String concatWithStringBuffer() {
        StringBuffer sb = new StringBuffer("Java");
        for (int i = 0; i < 10000; i++) {
            sb.append("Programming");
        }
        return sb.toString();
    }

    public static void main(String[] args) {
        long startTime = System.currentTimeMillis();
        concatWithString();
        System.out.println("Time taken to concat with String " + (System.currentTimeMillis() - startTime) + " ms");
        startTime = System.currentTimeMillis();
        concatWithStringBuffer();
        System.out.println("Time taken to concat with String Buffer " + (System.currentTimeMillis() - startTime) + " ms");
    }
}
