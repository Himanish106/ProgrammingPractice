package OOPS.Threading;

import java.util.logging.Level;
import java.util.logging.Logger;

class MyThread implements Runnable {

    @Override
    public void run() {
//        The run() method in Java is used to start a new thread. The Java Virtual Machine calls the run()
//        method of this thread.
        for (int i = 1; i <= 10; i++) {
            System.out.println("The value of i is:" + i);
            try {
                Thread.sleep(1000);
            } catch (InterruptedException ex) {
                Logger.getLogger(MyThread.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
    }
}

public class Threading02 {

    public static void main(String[] args) {
        MyThread t1=new MyThread();
        Thread tr=new Thread(t1);
        Threading03 thr3=new Threading03();
        tr.start();
        thr3.start();
    }
}
