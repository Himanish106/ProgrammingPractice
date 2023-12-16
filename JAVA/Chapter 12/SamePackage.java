package p1;

class SamePackage {
    SamePackage() {
        Protection p = new Protection();
        System.out.println("Same package Constructor");
        System.out.println("n = " + p.n);
        // System.out.println("n_pri = " + p.n_pri);---> Same package non Subclass hence not accessible
        System.out.println("n_pro = " + p.n_pro);
        System.out.println("n_pub = " + p.n_pub);
    }
}
