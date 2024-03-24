/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package PersonalTesting;

/**
 *
 * @author Himanish
 */
public class Fibo {
    public static void main(String[] args) {
        int first=0;
        int second=1;
        System.out.print(first+" "+second+" ");
        int size=10;
        int sum=0;
        for(int i=2; i<=size; i++){
            sum=first+second;
            System.out.print(sum+" ");
            int temp=second;
            second=sum;
            first=temp;
        }
    }
    
}
