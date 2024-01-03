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
public class InnerClass11 {
    static class Test{
        String name;

        public Test(String name) {
            this.name = name;
        }
        
    }
    public static void main(String[] args) {
        Test innerClass=new Test("Himanish"); // This is possible as Test has been declared as static which means that if a class that has been declared as static is no more dependent on the outer class.
    }
}
