public class indexOf {
    public static void main(String[] args) {
        String n = "Hello Himanish How are you? How is your family";
        System.out.println(n);
        System.out.println(n.indexOf('H'));
        System.out.println(n.lastIndexOf('H'));
        System.out.println(n.indexOf("How"));
        System.out.println(n.lastIndexOf("How"));
        System.out.println(n.indexOf('H', 7));
        System.out.println(n.lastIndexOf('H', 20));
    }
}
