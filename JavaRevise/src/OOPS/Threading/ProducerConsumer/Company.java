/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OOPS.Threading.ProducerConsumer;

import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Himanish
 */
public class Company {

    int n;
    boolean f = false;
//    f=false ---> Producer will Produce
//    f=true ----> Consumer will consume

    synchronized public void produceItem(int n) {
        if (f) {
            try {
                wait();
            } catch (InterruptedException ex) {
                Logger.getLogger(Company.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
        this.n = n;
        System.out.println("Produced :" + this.n);
        f = true;
        notify();
    }

    synchronized public int consumeItem() {
        if (!f) {
            try {
                wait();
            } catch (InterruptedException ex) {
                Logger.getLogger(Company.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
        System.out.println("Consumed Item :" + this.n);
        f = false;
        notify();
        return this.n;
    }
}
