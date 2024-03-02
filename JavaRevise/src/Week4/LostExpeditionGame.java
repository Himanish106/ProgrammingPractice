/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Week4;

/**
 *
 * @author Himanish
 */
import java.util.Scanner;

public class LostExpeditionGame {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Welcome to The Lost Expedition!");

        exploreJungle(scanner);

        scanner.close();
    }

    public static void exploreJungle(Scanner scanner) {
        System.out.println("\nYou find yourself leading an expedition deep into the jungle...");
        System.out.println("You reach a fork in the path.");

     
        System.out.println("Do you take the left path (1) or the right path (2)?");
        int choice = getUserChoice(scanner, 1, 2);

        if (choice == 1) {
            System.out.println("\nYou chose the left path...");
           
            System.out.println("You encounter a mysterious figure who guides you to a hidden cave.");
            System.out.println("Inside the cave, you find ancient artifacts and valuable treasures.");
        } else {
            System.out.println("\nYou chose the right path...");
            // Right path outcome
            System.out.println("You navigate through dense foliage and discover a hidden temple.");
            System.out.println("Inside the temple, you uncover secrets of the ancient civilization.");
        }

        
        System.out.println("\nWhile exploring, you encounter a wild animal.");
        System.out.println("Do you choose to confront it (1) or evade it (2)?");
        choice = getUserChoice(scanner, 1, 2);

        if (choice == 1) {
            System.out.println("\nYou decide to confront the wild animal...");
         
            System.out.println("You successfully scare away the animal and continue your journey.");
        } else {
            System.out.println("\nYou decide to evade the wild animal...");
          
            System.out.println("You sneak past the animal without alerting it and proceed cautiously.");
        }

     
        System.out.println("\nCongratulations! You have successfully completed The Lost Expedition.");
    }

    public static int getUserChoice(Scanner scanner, int min, int max) {
        int choice;
        while (true) {
            System.out.print("Enter your choice: ");
            if (scanner.hasNextInt()) {
                choice = scanner.nextInt();
                if (choice >= min && choice <= max) {
                    break;
                } else {
                    System.out.println("Invalid choice. Please enter a number between " + min + " and " + max + ".");
                }
            } else {
                System.out.println("Invalid input. Please enter a number.");
                scanner.next(); 
            }
        }
        return choice;
    }
}
