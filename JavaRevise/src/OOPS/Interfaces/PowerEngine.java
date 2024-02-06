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
public class PowerEngine implements Engine{

    @Override
    public void start() {
        System.out.println("Power Engine Start");
    }

    @Override
    public void stop() {
        System.out.println("Power Engine Stop");
    }

    @Override
    public void accelerate() {
        System.out.println("Power Engine Accelerate");
    }
    
}
