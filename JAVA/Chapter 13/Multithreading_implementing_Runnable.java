class MyRunnableThread1 implements Runnable {
    public void run() {
        int i = 0;
        try {
            while (i < 400) {
                System.out.println("I am thread 1");
                i++;
                Thread.sleep(5000);
            }
        } catch (InterruptedException e) {
            System.out.println("MyRunnableThread1 interrupted");
        }
    }
}

class MyRunnableThread2 implements Runnable {
    public void run() {
        int i = 0;
        try {
            while (i < 400) {
                System.out.println("I am thread 2");
                i++;
                Thread.sleep(1000);
            }
        } catch (InterruptedException e) {
            System.out.println("MyRunnableThread2 interrupted");
        }
    }
}

public class Multithreading_implementing_Runnable {
    public static void main(String[] args) {
        MyRunnableThread1 bullet1 = new MyRunnableThread1();
        Thread gun1 = new Thread(bullet1);
        MyRunnableThread2 bullet2 = new MyRunnableThread2();
        Thread gun2 = new Thread(bullet2);
        gun1.start();
        gun2.start();
    }
}