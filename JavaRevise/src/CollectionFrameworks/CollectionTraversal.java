package CollectionFrameworks;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.ListIterator;

public class CollectionTraversal {

    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();
        names.add("Himanish");
        names.add("Shoaib");
        names.add("Naveen");
        names.add("Shubhashish");
        names.add("Ritesh");
        names.add("Mukesh");
//      List can be traversed using 3 techniques
//      1) for each loop:
        for (String str : names) {

            System.out.println(str);

        }
        System.out.println("********************************************************\n");
//      Another syntax for for-each(Known as for each method)
        names.forEach((str) -> {
            System.out.print(str + "\t\t\t\t\t" + str.length() + "\t\t\t\t\t");
            StringBuilder br = new StringBuilder(str);
            System.out.println(br.reverse());
        });
        System.out.println("********************************************************\n");
//      2) Traversing using Iterator
//         .Forward Traversing ---> Use iterator
        Iterator<String> iterator = names.iterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }
        System.out.println("********************************************************\n");
//         .Backward Traversing ---> Use ListIterator
        ListIterator<String> listIterator = names.listIterator(names.size()); // Size is used to declare the
        // indes from where the traversal would start
        while (listIterator.hasPrevious()) {
            System.out.println(listIterator.previous());
        }

    }
}
