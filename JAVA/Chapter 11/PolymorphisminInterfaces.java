interface MyCamera2 {
    void takeSnap();

    void recordVideo();

    private void greet() {
        System.out.println("Good Morning");
    }

    // If the logic of default method is very big then we use the private method
    default void record4KVideo() {
        greet();
        System.out.println("Recording Video in 4K...");
    }
}

interface MyWifi2 {
    String[] getNetworks();

    void connectToNetwork(String network);
}

class MyCellphone2 {
    void callNumber(long phonenumber) {
        System.out.println("Calling " + phonenumber);
    }

    void pickCall() {
        System.out.println("Connecting....");
    }

}

class MySmartphone2 extends MyCellphone2 implements MyCamera2, MyWifi2 {
    public void takeSnap() {
        System.out.println("Taking Snap...");
    }

    public void recordVideo() {
        System.out.println("Recording Video...");
    }

    public String[] getNetworks() {
        System.out.println("Getting a list of Networks");
        String[] networklists = { "dlink-ivy", "JioFi2A0A1DE", "Bluester" };
        return networklists;
    }

    public void connectToNetwork(String network) {
        System.out.println("Connecting to " + network);
    }
    // public void record4KVideo()
    // {
    // System.out.println("Overriden method for record4KVideo()");
    // }
}

public class PolymorphisminInterfaces {
    public static void main(String[] args) {
        MyCamera2 cam1 = new MySmartphone2(); //This is a smartphone and use it as a camera
        cam1.record4KVideo();
        // cam1.connectToNetwork();---> Not allowed since address is of MyCamera2
    }
}
