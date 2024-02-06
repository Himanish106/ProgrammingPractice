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
public interface Engine {
    int PRICE=4500; // In interfaces variables are static and final by default
/*  The reason is Interface variables are static because Java interfaces cannot be instantiated on their 
    own; the value of the variable must be assigned in a static context in which no instance exists. 
    The final modifier ensures the value assigned to the interface variable is a true constant that cannot
    be re-assigned by program code  
*/
    void start();
    void stop();
    void accelerate();
}
