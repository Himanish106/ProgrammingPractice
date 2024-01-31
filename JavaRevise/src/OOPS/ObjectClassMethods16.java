/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OOPS;

/**
 *
 * @author Himanish
 */
public class ObjectClassMethods16 {

    int num;

    public ObjectClassMethods16(int num) {
        this.num = num;
    }

    @Override
    public String toString() {
        return super.toString(); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    protected void finalize() throws Throwable {
        super.finalize(); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone(); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public boolean equals(Object obj) {
//        return super.equals(obj); //To change body of generated methods, choose Tools | Templates.
          return this.num == ((ObjectClassMethods16)obj).num;
    }

//  We will go into the details in the hashmap lecture  
    @Override
    public int hashCode() {
        return super.hashCode(); //To change body of generated methods, choose Tools | Templates.
//        return num;
    }

    public static void main(String[] args) {
        ObjectClassMethods16 obj1 = new ObjectClassMethods16(34);
//        System.out.println(obj.hashCode());
        ObjectClassMethods16 obj2 = new ObjectClassMethods16(34);
        if(obj1.equals(obj2)){
            System.out.println("obj1 and obj2 are equal");
        }
    }
}
