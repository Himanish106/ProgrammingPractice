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
public class PalindromeWord {

    public static void main(String[] args) {
        String c = "abcdcba";
        if (checkPalindromeWord(c)) {
            System.out.println("Palindrome Word");
        } else {
            System.out.println("Not a Palindrome Word");
        }

    }

    static boolean checkPalindromeWord(String word) {
        if (word == null || word.length() == 0) {
            return true;
        }
        for (int i = 0; i < word.length() / 2; i++) {
            char frontPointer = word.charAt(i);
            char backPointer = word.charAt(word.length() - 1 - i);
            if (frontPointer != backPointer) {
                return false;
            }
        }
        return true;
    }
}
