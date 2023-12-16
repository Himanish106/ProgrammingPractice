class Box {
    double width, height, depth;

    Box(Box ob) {
        width = ob.width;
        height = ob.height;
        depth = ob.depth;
    }

    Box(double w, double h, double d) {
        width = w;
        height = h;
        depth = d;
    }

    Box() {
        width = -1;
        height = -1;
        depth = -1;
    }

    // Constructor when cube is created
    Box(double len) {
        width = height = depth = len;
    }

    double volume() {
        return width * height * depth;
    }
}

class Boxweight extends Box {
    double weight;

    Boxweight(double w, double h, double d, double m) {
        // width = w;
        // height = h;
        // depth = d;
        super(w, h, d);
        weight = m;
    }
}

public class Refdemo {
    public static void main(String[] args) {
        Boxweight weightbox = new Boxweight(3, 5, 7, 8.37);
        Box plainbox = new Box();
        double vol;
        vol = weightbox.volume();
        System.out.println("Volume of weight box is " + vol);
        System.out.println("Weight of weight box is " + weightbox.weight);
        System.out.println();
        // Assign Boxweight reference to Box reference
        plainbox = weightbox;
        vol = plainbox.volume();
        System.out.println("Volume of plainbox is " + vol);
        // System.out.println(plainbox.weight);
    }
}
