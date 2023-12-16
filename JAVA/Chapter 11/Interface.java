interface Bicycle {
    int a = 45;

    void applyBrake(int decrement);

    void speedUp(int increment);
}

interface Horn {
    void hornType1();

    void hornType2();
}

class AvonCycle implements Bicycle, Horn {
    void blowHorn() {
        System.out.println("Blow Horn");
    }

    public void applyBrake(int decrement) {
        System.out.println("Applying Brake");
    }

    public void speedUp(int increment) {
        System.out.println("Applying Speedup");
    }

    public void hornType1() {
        System.out.println("Blow Horn Type1");
    }

    public void hornType2() {
        System.out.println("Blow Horn Type2");
    }
}

public class Interface {
    public static void main(String[] args) {
        AvonCycle cycle = new AvonCycle();
        cycle.blowHorn();
        cycle.applyBrake(10);
        cycle.speedUp(30);
        // You can create properties in interfaces
        System.out.println(cycle.a);
        // You cannot modify the properties in interfaces as they are final
        // cycle.a=454;
        // System.out.println(cycle.a);
        cycle.hornType1();
        cycle.hornType2();
    }
}
