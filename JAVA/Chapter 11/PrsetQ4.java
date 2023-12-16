abstract class Telephone {
    abstract void ring();

    abstract void lift();

    abstract void disconnect();
}

class SmartTelephone extends Telephone {
    void ring() {
        System.out.println("Ringing....");
    }

    void lift() {
        System.out.println("Picking up the call");
    }

    void disconnect() {
        System.out.println("Disconnect");
    }

    void playMusic() {
        System.out.println("Playing Music...");
    }
}

public class PrsetQ4 {
    public static void main(String[] args) {
        Telephone t = new SmartTelephone();
        t.disconnect();
        t.lift();
        t.ring();
        // t.playMusic();--->Reference is of Telephone hence error
    }
}
