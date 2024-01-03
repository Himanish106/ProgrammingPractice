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
public class Singleton14Main {

    public static void main(String[] args) {
//        Singleton14 s1 = new Singleton14();
//        Singleton14 s2 = new Singleton14(); ---> Singleton14 has private access
        Singleton14 obj1 = Singleton14.getInstance();
        Singleton14 obj2 = Singleton14.getInstance();
//          So now in this case only on time an object is created. That is when we create obj1 then only the object is created. Rest of the time whenver the Calendar.getInstance() method is called each and everytime the variable of type Singleton14 will point to that single object.
    }
}
