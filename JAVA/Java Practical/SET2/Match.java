/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package SET2;

/**
 *
 * @author Gablu
 */
public class Match {

    public static void main(String args[]) {
        String list1 = "Stephen Edwin King";
        String list2 = "Walter Winchell";
        boolean equals1 = list1.equals(list2);
        boolean equals2 = list1.equals(list1);
        System.out.println("\"" + list1 + "\"equals\"" + list2 + "\"?" + equals1);
        System.out.println("\"" + list1 + "\"equals\"" + list1 + "\"?" + equals2);
    }
}
