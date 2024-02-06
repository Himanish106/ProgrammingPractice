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
public class ElectricEngine implements Engine{

    @Override
    public void start() {
        System.out.println("Electric Engine Start");
    }

    @Override
    public void stop() {
        System.out.println("Electric Engine Stop");
    }

    @Override
    public void accelerate() {
        System.out.println("Electric Engine Accelerate");
    }
    
}
