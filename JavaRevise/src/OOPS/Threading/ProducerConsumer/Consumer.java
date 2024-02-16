/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OOPS.Threading.ProducerConsumer;
public class Consumer extends Thread {
    Company c;

    public Consumer(Company c) {
        this.c = c;
    }
    
    @Override
    public void run(){
        while (true) {            
            this.c.consumeItem();
            
            try {
                Thread.sleep(1000);
            } catch (InterruptedException ex) {
                System.out.println(ex);
            }
        }
    }
    
}
