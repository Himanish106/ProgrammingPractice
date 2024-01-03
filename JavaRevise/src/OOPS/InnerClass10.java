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
public class InnerClass10 {

    class Test {

        String name;

        public Test(String name) {
            this.name = name;
        }
    }

    public static void main(String[] args) {
//        Test a = new Test("Himanish");  ---> class Test is a non static method and is completely dependent on the outer class. Non-static inner classes (also known as inner classes or member classes) require an instance of the outer class to be instantiated. 

// Inner Class can be instantiated in this way.
// At first create the instance of the outer class.
        InnerClass10 outerInstance = new InnerClass10();
// Now we can create the instance of the inner class using the reference of outerinstance
        Test a = outerInstance.new Test("Himanish");
//      This line creates an instance of the inner class Test using the instance of the outer class outerInstance. The syntax outerInstance.new Test("Himanish") indicates that the inner class instance is associated with the outer class instance outerInstance.f
        System.out.println(a.name);
    }
}
// Refer to InnerClass11.java for more