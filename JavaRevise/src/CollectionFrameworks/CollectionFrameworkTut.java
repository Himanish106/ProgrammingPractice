/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package CollectionFrameworks;

import java.util.*;

public class CollectionFrameworkTut {

    public static void main(String[] args) {
        /* 
        
        Collection are of two types
        
        1)Type Safe: Same type of elements or objects are added to collection
        2)Untype Safe: Different types of elements or objects are added to collection        
        
         */

//        Type Safe
        ArrayList<String> names = new ArrayList<>(); // Can accept only String values
        names.add("Himanish");
//        names.add(19); --> Error
        names.add("Rajesh");
        names.add("Suresh");
        System.out.println(names.get(1));
//      In list duplication of values are allowed
        names.add("Himanish");
        names.add("Ajay");
        System.out.println(names);
//       Untype Safe
        ArrayList list = new ArrayList();
        list.add("Hii");
        list.add(2207);
        list.add(2207.43);
        list.add(true);
        list.add(null);
        System.out.println(list);
        Vector vector = new Vector();
        vector.addAll(names);
        System.out.println(vector);
        HashSet<Double> nms = new HashSet<>();
        nms.add(21.33); // Even though here we are using wrapper class we do not need to pass the value as
        // an object because autobox performs here that is value is type casted automatically
//        nms.add(new Double(32.41));---> This was what we were explaining above.This is not required
        nms.add(69.9);
        nms.add(21.7);
        nms.add(19.43);
        System.out.println(nms);

//        TreeSet
        TreeSet<String> name = new TreeSet<>();
        name.addAll(names);
        System.out.println(name);
//      So here elements gets sorted alphabetically.
//      Now if the set contains elements like objects,strings,integers etc. Then you have to write custom logic for sorting.
//      For that you need to know the concept of Comparable and Comparator
    }

}
