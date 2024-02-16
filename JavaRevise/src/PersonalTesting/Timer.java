package PersonalTesting;

class OneMinuteTimer implements Runnable {

    @Override
    public void run() {
        for (int i = 1; i <= 60; i++) {
            System.out.println(i);
            try {
                Thread.sleep(1000);
            } catch (InterruptedException ex) {
                System.out.println(ex.getMessage());
            }
        }
    }
}

public class Timer {

    public static void main(String[] args) {
        OneMinuteTimer o = new OneMinuteTimer();
        Thread t = new Thread(o);
        t.start();
    }
}
