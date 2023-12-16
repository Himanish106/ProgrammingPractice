public class ch_02_pr_Q1 {
    public static void main(String[] args) {
        float a=(7/4.0f)*(9/2.0f);
        /*
              =1.75*4.5
              =7.875

         If we have written the expression as:-

         float a=(7/4)*(9/2)
                =1*4
                =4.0
       Thus this is not the actual value of the following expression because using f gives the decimal part of
       the expression

        */
        System.out.println(a);
    }
}
