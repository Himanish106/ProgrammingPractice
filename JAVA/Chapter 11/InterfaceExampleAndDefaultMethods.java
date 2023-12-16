interface MyCamera {
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

interface MyWifi {
    String[] getNetworks();

    void connectToNetwork(String network);
}

class MyCellphone {
    void callNumber(long phonenumber) {
        System.out.println("Calling " + phonenumber);
    }

    void pickCall() {
        System.out.println("Connecting....");
    }

}

class MySmartphone extends MyCellphone implements MyCamera, MyWifi{
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

public class InterfaceExampleAndDefaultMethods {
    public static void main(String[] args) {
        MySmartphone ms = new MySmartphone();
        ms.record4KVideo();
        // ms.greet(); ---> Throws an error because greet method has an private access
        String[] ar = ms.getNetworks();
        for (String item : ar) {
            System.out.println(item);
        }
    }
}
