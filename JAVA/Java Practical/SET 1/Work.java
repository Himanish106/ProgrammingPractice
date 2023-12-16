//Q2
import java.util.Scanner;

class Worker {
    String name;

    Worker(String name) {
        this.name = name;
    }

    void show() {
        System.out.println("Employee Name: " + name);
    }
}

class DailyWorker extends Worker {
    int rate;

    DailyWorker(String name, int rate) {
        super(name);
        this.rate = rate;
    }

    void compay(int days) {
        show();
        System.out.println("Salary of dailyworker: " + rate * days);
    }
}

class SalariedWorker extends Worker {
    int rate;

    SalariedWorker(String name, int rate) {
        super(name);
        this.rate = rate;
    }

    int hour = 40;

    void compay() {
        show();
        System.out.println("Salary of salaried worker: " + rate * hour);
    }
}

public class Work {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter name of Dailyworker");
        String dailyworkerName = sc.nextLine();
        System.out.println("Enter rate of salary of dailyworker");
        int salaryratedaily = sc.nextInt();
        System.out.println("Enter the no. of days of payment");
        int days = sc.nextInt();
        DailyWorker d = new DailyWorker(dailyworkerName, salaryratedaily);
        d.compay(days);
        System.out.println("Enter name of Salariedworker");
        sc.nextLine();
        String salariedworkerName = sc.nextLine();
        System.out.println("Enter rate of salary of salariedworker");
        int salaryratesalaried = sc.nextInt();
        SalariedWorker s = new SalariedWorker(salariedworkerName, salaryratesalaried);
        s.compay();
    }
}
