public class valueOf {
    public static void main(String[] args) {
        int value = 30;
        String s1 = String.valueOf(value);
        System.out.println(s1.concat("10"));
        System.out.println(s1 + 10);
    }
}
