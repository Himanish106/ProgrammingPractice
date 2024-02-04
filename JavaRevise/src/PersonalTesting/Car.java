/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package PersonalTesting;

/**
 *
 * @author Himanish
 */
public class Car {

    String model; // Instance variable or Object Variables
    int price;
    String color;
    static String EngineModel; // This means this is a class variable

    Car(String model, int price, String color) {
        this.model = model;
        this.color = color;
        this.price = price;
        Car.EngineModel = "xyz"; // static variables should be accessed only with the name of the class.
    }

    @Override
    public String toString() {
        return "This is class Car that has a model: " + this.model + "and has a color: " + color + " and has a price :" + price;
    }
    static void carEngineDetails(){
//        System.out.println(model); ---> model cannot be accessed from a static method because model is a 
//        instance variable. Only static variables can be accessed from a static context/method.
          System.out.println(EngineModel);
    }
}
