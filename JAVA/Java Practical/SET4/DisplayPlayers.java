/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Project/Maven2/JavaApp/src/main/java/${packagePath}/${mainClassName}.java to edit this template
 */
package SET4;

/**
 *
 * @author Gablu
 */
import java.util.Scanner;

class Player {

    String name;
    int age;

    Player(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void show() {
        System.out.println("Name of the player: " + name);
        System.out.println("Age of the player is: " + age);
    }
}

class Cricket_Player extends Player {

    String type;

    Cricket_Player(String name, String type, int age) {
        super(name, age);
        this.type = type;
    }

    @Override
    public void show() {
        super.show();
        System.out.println("The player is a " + type);
    }
}

class Football_Player extends Player {

    String type;

    Football_Player(String name, String type, int age) {
        super(name, age);
        this.type = type;
    }

    @Override
    public void show() {
        super.show();
        System.out.println("The player is a " + type);
    }
}

class Hockey_Player extends Player {

    String type;

    Hockey_Player(String name, String type, int age) {
        super(name, age);
        this.type = type;
    }

    @Override
    public void show() {
        super.show();
        System.out.println("The player is a " + type);
    }
}

public class DisplayPlayers {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the name of cricket player");
        String name_cricket = sc.nextLine();
        System.out.println("Enter the age of cricket player");
        int age_cricket = sc.nextInt();
        Cricket_Player c = new Cricket_Player(name_cricket, "Cricketer", age_cricket);
        c.show();
        sc.nextLine();
        System.out.println("Enter the name of football player");
        String name_football = sc.nextLine();
        System.out.println("Enter the age of football player");
        int age_football = sc.nextInt();
        Football_Player f = new Football_Player(name_football, "Footballer", age_football);
        f.show();
        sc.nextLine();
        System.out.println("Enter the name of hockey player");
        String name_hockey = sc.nextLine();
        System.out.println("Enter the age of football player");
        int age_hockey = sc.nextInt();
        Hockey_Player h = new Hockey_Player(name_hockey, "Hockey Player", age_hockey);
        h.show();
    }
}
