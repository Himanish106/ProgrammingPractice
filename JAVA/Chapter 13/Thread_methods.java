class MyNewThr1 extends Thread {
    public void run() {
        int i = 0;
        while (i < 45660) {

            System.out.println("Thank you1: ");
            i++;
        }
    }
}

class MyNewThr2 extends Thread {
    public void run() {
        while (true) {

            System.out.println("Thank you2: ");
        }
    }
}

public class Thread_methods {
    public static void main(String[] args) {
        MyNewThr1 t1 = new MyNewThr1();
        MyNewThr2 t2 = new MyNewThr2();
        t1.start();
        try {

            t1.join(); // This method continues to run the thread until it is dead. Here we have used a
                       // try catch block as it may show an exception if we try to run it but it is
                       // dead or maybe interrupted.
        } catch (InterruptedException e) {
            System.out.println(e);
        }
        t2.start();
    }
}
