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
public class ToString13 {
    static class Test {

        String name;

        public Test(String name) {
            this.name = name;
        }
        @Override
        public String toString(){
            return name;
        }
    }
    public static void main(String[] args) {
        Test t=new Test("Himanish");
        System.out.println(t);
    }
}
// So if we want we can override the toString() method.