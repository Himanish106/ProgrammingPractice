class Run implements Runnable {
    public void run() {
        System.out.println("This is my runnable class");
    }
}

class MyThread extends Thread {
    MyThread(Runnable r, String n) {
        super(n);
    }

    public void run() {
        System.out.println("This is my run method of MyThread class");
    }
}

public class Constructor_Runnable_and_String {
    public static void main(String[] args) {
        Run r = new Run();
        Thread t1 = new Thread(r);
        t1.start();
        MyThread t2 = new MyThread(r, "Hello");
        t2.start();

        System.out.println("The id of the thread is: " + t2.getId());
        System.out.println("The name of the thread is: " + t2.getName());
    }
}
