package OOPS.Generics;

public class Generics {
    public static void main(String[] args) {
        /*
         * Generics means parameterized types. Using generics, it is possible to create
         * classes that work with different data types. An entity such as class,
         * interface or methods that operates on a parameterized type is a generic
         * entity.
         */

        // Dog d1 = new Dog("1234");
        // Dog d2 = new Dog(1234); --> Suppose if we need an id of type Integer then we
        // cannot use it because 1234 is a string. So in order to use multiple data
        // types according to out necessity we need generics.

        Dog<String> d1 = new Dog<>("1234");
        Dog<Integer> d2 = new Dog<>(1234);
        Dog<Boolean> d3 = new Dog<>(true);
        System.out.println(d3.getId());
    }
}

// class Dog {
// String id;

// public Dog(String id) {
// this.id = id;
// }

// }
class Dog<E> {
    E id;

    public Dog(E id) {
        this.id = id;
    }

     E getId() {
        return id;
    }
}