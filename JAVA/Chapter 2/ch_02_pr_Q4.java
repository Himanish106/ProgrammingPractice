public class ch_02_pr_Q4 {
    public static void main(String[] args) {
//        float v=8.0f,u=6.0f,a=4.0f,s=6.0f;
        float v=8,u=6,a=4,s=6;

        /*
              =v^2-u^2/2as
              =(v*v-u*u)/(2*a*s)
              =(64-36)/(48)
              =28/48
              =0.58333333
        */
        float result=(v*v-u*u)/(2*a*s);
        System.out.println(result);
    }
}
