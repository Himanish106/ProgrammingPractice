/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OOPS;

/**
 *
 * @author hp
 */
public class Singleton14 {

    private Singleton14() {

    }
    private static Singleton14 instance;

    public static Singleton14 getInstance() {
        if (instance == null) {
            instance = new Singleton14();
        }
        return instance;
    }
}
