package PersonalTesting;

class Father {

    String property;
    int money;

    Father(String property, int money) {
        this.property = property;
        this.money = money;
    }

    public String familyDetails() {
        return "Father has this much " + property + " and has an amount of: " + money;
    }
}

class Son extends Father {

    String mobile;

    public Son(String property, int money, String mobile) {
        super(property, money);
        this.mobile = mobile;
//        mobile = "9073889463";
    }

    @Override
    public String familyDetails() {
        return "Child has this much " + money + " and has a property of inherited from his father " + property;
    }
}

public class Inheritence {

    public static void main(String[] args) {
        Father s = new Son("House", 90000,"Oppo");
        String details = s.familyDetails();
        System.out.println(details);
    }
}
