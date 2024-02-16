package OOPS.Threading.ProducerConsumer;

public class Producer extends Thread {

    Company c;

    public Producer(Company c) {
        this.c = c;
    }

    @Override
    public void run() {
        int i = 1;
        while (true) {
            this.c.produceItem(i);
            try {
                Thread.sleep(3000);
            } catch (InterruptedException ex) {
                System.out.println(ex.getMessage());
            }
            i++;
        }
    }

}
