/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javarevise;

/**
 *
 * @author hp
 */
public class Swap06 {

    public static void main(String[] args) {
        Swap sw = new Swap(20, 10);
//        System.out.println(sw.a);
        sw.swap();
        System.out.println("Value of a is: " + sw.getA() + " and b is " + sw.getB());
    }

    static class Swap {

        private Integer a;
        private Integer b;

        public Integer getA() {
            return a;
        }

        public Integer getB() {
            return b;
        }

        public Swap(Integer a, Integer b) {
            this.a = a;
            this.b = b;
        }

        public void swap() {
            Integer temp = a;
            a = b;
            b = temp;
        }
    }
}
