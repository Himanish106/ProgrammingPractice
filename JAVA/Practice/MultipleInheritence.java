interface Accelarate {
    void accelarate();
}

class Vehicle {
    String brand;

    public Vehicle(String brand) {
        this.brand = brand;
    }
 
    public void start() {
        System.out.println(brand + " is starting");
    }

    public void stop() {
        System.out.println(brand + " is stopping");
    }

    public String getBrand() {
        return brand;
    }
}

class Car extends Vehicle implements Accelarate {
    int numberOfDoors;

    public Car(String brand, int numberOfDoors) {
        super(brand);
        this.numberOfDoors = numberOfDoors;
    }

    public void accelarate() {
        System.out.println(getBrand() + " is accelarating");
    }

    public void honk() {
        System.out.println(getBrand() + " is honking");
    }
}

class Motorcycle extends Vehicle implements Accelarate {
    String type;

    public Motorcycle(String brand, String type) {
        super(brand);
        this.type = type;
    }

    public void accelarate() {
        System.out.println(getBrand() + " motorcycle is accelarating");
    }

    public void wheelie() {
        System.out.println(getBrand() + " motorcycle is doing a wheelie");
    }
}

public class MultipleInheritence {
    public static void main(String[] args) {
        Car myCar = new Car("Suzuki", 4);
        Motorcycle motorcycle = new Motorcycle("Honda", "Cruiser");
        myCar.start();
        myCar.accelarate();
        myCar.stop();
        System.out.println();
        motorcycle.start();
        motorcycle.accelarate();
        motorcycle.stop();
        System.out.println();
        motorcycle.wheelie();
    }
}