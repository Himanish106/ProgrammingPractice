abstract class Pen {
    abstract void write();

    abstract void refil();
}

class FountainPen extends Pen {
    void write() {
        System.out.println("Write");
    }

    void refil() {
        System.out.println("Refill");
    }

    void changeNib() {
        System.out.println("Change Nib");
    }
}

public class PrsetQ1andQ2 {
    public static void main(String[] args) {
        FountainPen pen = new FountainPen();
        pen.changeNib();
        pen.refil();
        pen.write();
    }
}