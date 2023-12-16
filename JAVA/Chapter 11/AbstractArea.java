abstract class Figure {
    double dim1, dim2;

    Figure(double a, double b) {
        dim1 = a;
        dim2 = b;
    }

    // area is now an abstract method
    abstract double area();
}

class Rect extends Figure {
    Rect(double a, double b) {
        super(a, b);
    }

    double area() {
        System.out.println("Inside area for rectangle.");
        return dim1 * dim2;
    }
}

class Traingle extends Figure {
    Traingle(double a, double b) {
        super(a, b);
    }

    double area() {
        System.out.println("Inside area for Traingle.");
        return dim1 * dim2 / 2;
    }
}

class AbstractArea {
    public static void main(String[] args) {
        Rect r = new Rect(9, 5);
        Traingle t = new Traingle(10, 8);
        Figure figref; // variable figref is declared as a reference to Figure which means that it can
                       // be used to refer to an object of any class derived from figure
        figref = r;
        System.out.println(figref.area());
        figref = t;
        System.out.println(figref.area());
    }
}