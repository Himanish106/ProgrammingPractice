class MyThread1 extends Thread {
    @Override
    public void run() {
        int i = 0;
        try {
            while (i < 40000) {
                System.out.println("My cooking thread is Running");
                System.out.println("I am happy");
                i++;
                MyThread1.sleep(5000);
            }
        } catch (InterruptedException e) {
            System.out.println("Thread 1 interrupted");
        }
    }
}

class MyThread2 extends Thread {
    @Override
    public void run() {
        int i = 0;
        try {
            while (i < 40000) {
                System.out.println("Thread 2 for chatting");
                System.out.println("I am sad");
                i++;
                MyThread2.sleep(1000);
            }
        } catch (InterruptedException e) {
            System.out.println("Thread 2 interrupted");
        }
    }
}

public class Multithreading_extending_Thread_Class {
    public static void main(String[] args) {
        MyThread1 t1 = new MyThread1();
        MyThread2 t2 = new MyThread2();
        t1.start();
        t2.start();
    }
}