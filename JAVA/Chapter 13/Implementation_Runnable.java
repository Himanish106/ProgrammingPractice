class NewThread implements Runnable {
    Thread t;

    NewThread() {
        // Create a new Second Thread
        t = new Thread(this, "Demo Thread");
        System.out.println("Child Thread: " + t);
    }

    // This is the entry point for the second Thread
    public void run() {
        try {
            for (int i = 5; i > 0; i--) {
                System.out.println("Child Thread: " + i);
                Thread.sleep(500);
            }
        } catch (InterruptedException e) {
            System.out.println("Child Interrupted.");
        }
        System.out.println("Exiting Child Thread.");
    }
}

public class Implementation_Runnable {
    public static void main(String[] args) {
        NewThread nt = new NewThread();
        nt.t.start();
        try {
            for (int i = 5; i > 0; i--) {
                System.out.println("Main Thread: " + i);
                Thread.sleep(1000);
            }
        } catch (InterruptedException e) {
            System.out.println("Main Thread interrupted");
        }
        System.out.println("Main Thread exiting. ");
    }
}
