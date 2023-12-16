package p1;

class Derived extends Protection {
    Derived() {
        System.out.println("Derived Constructor");
        System.out.println("n = " + n);
        // System.out.println("n_pri = " + n_pri);---> Since in same package subclass hence not accesible
        System.out.println("n_pro = " + n_pro);
        System.out.println("n_pub = " + n_pub);
    }
    }