interface TVRemote {
    void buttons();

    void channelNumber(int number);
}

interface SmartTvRemote extends TVRemote {
    void touchScreen();

    void digital();
}

class TV implements TVRemote {
    public void buttons() {
        System.out.println("Press the buttons...");
    }

    public void channelNumber(int number) {
        System.out.println("Channel number " + number);
    }
}

public class PrsetQ6andQ7 {
    public static void main(String[] args) {
        TV t = new TV();
        t.buttons();
        t.channelNumber(256);
    }
}
