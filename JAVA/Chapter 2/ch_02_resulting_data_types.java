public class ch_02_resulting_data_types {
    public static void main(String[] args) {
        // Quick Quiz
        /*
        int a=6;
        System.out.println(a++);
        System.out.println(a);
        System.out.println(++a);
        System.out.println(a);

         */
//        Quick Quiz 02
        int y=7;
        int x=++y*8;// Precedence of ++ operator is greater than * so ++y is evaluated first
        System.out.println(x);
    }
}
