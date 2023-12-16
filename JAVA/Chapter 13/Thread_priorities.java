class MyThr1 extends Thread {
    MyThr1(String name) {
        super(name);
    }

    public void run() {
        while (true) {

            System.out.println("Thank you: " + this.getName());
        }
    }
}

public class Thread_priorities {
    public static void main(String[] args) {
        MyThr1 t1 = new MyThr1("Java1");
        MyThr1 t2 = new MyThr1("Java2");
        MyThr1 t3 = new MyThr1("Java3");
        MyThr1 t4 = new MyThr1("Java4");
        MyThr1 t5 = new MyThr1("Java5");
        t5.setPriority(Thread.MAX_PRIORITY);
        t1.setPriority(Thread.NORM_PRIORITY);
        t2.setPriority(Thread.MIN_PRIORITY);
        t3.setPriority(Thread.MIN_PRIORITY);
        t4.setPriority(Thread.MIN_PRIORITY);
        t1.start();
        t2.start();
        t3.start();
        t4.start();
        t5.start();
    }
}
