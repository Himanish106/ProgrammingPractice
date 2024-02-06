/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OOPS.Interfaces;

/**
 *
 * @author Himanish
 */
public class Main {

    public static void main(String[] args) {
//        Car c = new Car();
//        c.start();
//        c.accelerate();
//        c.brake();
//        c.stop();
//        Media carMedia = new Car();
//        carMedia.stop();

          NiceCar car=new NiceCar();
          car.start();
          car.startMusic();
          car.upgradeEngine();
          car.start();

    }
}
