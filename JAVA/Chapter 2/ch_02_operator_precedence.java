public class ch_02_operator_precedence {
    public static void main(String[] args) {
        int a=6*5-34/2;
        // Precedence and Associativity
/*
    If Java had followed BODMAS Rule:-
          =6*5-17
          =30-17
          =13
*/
        int b= 12*5-34/2;
        /*
             =60-34/2
             =60-17
             =43
        */
        int c=60/5-34*2;
        /*
             =12-34*2
             =12-68
             =-56
        */

        System.out.println(a);
        System.out.println(b);
        System.out.println(c);
    }
}
