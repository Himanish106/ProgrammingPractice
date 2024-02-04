package PersonalTesting;

public class Student {

    private int id;
    private String name;
    private int roll;

    private void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    private void setName(String name) {
        this.name = name;
    }

    public int getRoll() {
        return roll;
    }

    private void setRoll(int roll) {
        this.roll = roll;
    }

    private void setValues() {
        setId(43);
        setName("Himanish");
        setRoll(106);
    }
    Student(){
        setValues();
    }
}