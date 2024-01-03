/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OOPS;

public class ToString12 {

    static class Test {

        String name;

        public Test(String name) {
            this.name = name;
        }

        public static void main(String[] args) {
            Test t = new Test("Himanish");
            System.out.println(t);
//          So here we are getting a random hash value. println is actually a method that is accepting a variable of type Object as a parameter in this case. Now inside this method we have another method called String.valueOf that is accepting the variable t of type Object as the parameter. Now inside the valueOf method we have another method called obj.toString. So obj is basically a reference to the object of the class called as Object.java. Now here the toString() converts the object t to a String which is basically a hexcode in string format. 

// Please refer to ToString13.java for more
        }
    }
}
