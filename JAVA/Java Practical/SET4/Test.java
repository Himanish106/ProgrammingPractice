/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package SET4;

/**
 *
 * @author Gablu
 */
class Constructor {

    int a, b, c;

    Constructor() {
        a = 0;
        b = 0;
        c = 0;
    }

    Constructor(int a, int b, int c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    void display() {
        System.out.println(a);
        System.out.println(b);
        System.out.println(c);
    }
}

public class Test {

    public static void main(String args[]) {
        Constructor c1 = new Constructor();
        c1.display();
        Constructor c2 = new Constructor(10, 20, 30);
        c2.display();
    }
}
