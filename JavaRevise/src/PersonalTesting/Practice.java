package PersonalTesting;

import java.util.InputMismatchException;
import java.util.Scanner;

public class Practice {

    public static void main(String[] args) {
        long num,addnum;
        Scanner sc = new Scanner(System.in);
        while (true) {
            try {
                System.out.println("Please Enter a number");
                num = sc.nextLong();
                break;
            }
             catch(InputMismatchException ex)
            {
                System.out.println("Input Type did not match please enter a number");
                sc.next();
            }
        }
        String convNum=Long.toString(num);
        StringBuffer str=new StringBuffer(convNum);
        int deletedPos=str.length()/2;
        str.deleteCharAt(str.length()/2);
        while (true) {
            try {
                System.out.println("Please Enter a number");
                addnum = sc.nextLong();
                break;
            }
             catch(InputMismatchException ex)
            {
                System.out.println("Input Type did not match please enter a number");
                sc.next();
            }
        }
        String convAddNum=Long.toString(addnum);
        str.insert(deletedPos,convAddNum);
        System.out.println(str);
    }
}
