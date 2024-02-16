package OOPS.Threading;
// Second Way to create thread

public class Threading03 extends Thread {

    @Override
    public void run() {
        for (int value = 10; value >= 1; value--) {
            System.out.println(value);
            try {

                Thread.sleep(2000);
            } catch (InterruptedException ex) {
                System.out.println(ex);
            }

        }
    }
}
// Object of class Threading03 has been created in Threading02.java
