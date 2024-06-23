package JavaPrac.LinkedListPractice;

import java.util.Scanner;

public class LinkedListMain {
    public static void main(String[] args) {
        int index, value, choice;
        Scanner sc = new Scanner(System.in);
        LinkedList list = new LinkedList();
        while (true) {
            System.out.println();
            System.out.println("1. Insert at First Position");
            System.out.println("2. Insert at Last Position");
            System.out.println("3. Insert at Desired Position");
            System.out.println("4. Delete first Node");
            System.out.println("5. Delete last Node");
            System.out.println("6. Delete Node from a position");
            System.out.println("7. Display List");
            System.out.println("8. Exit");
            System.out.println("------------------------------------------------------------------");
            System.out.print("Enter Your Choice : ");
            choice = sc.nextInt();
            switch (choice) {
                case 1:
                    System.out.print("Enter value to be inserted :");
                    value = sc.nextInt();
                    list.insertAtFirst(value);
                    break;

                case 2:
                    System.out.print("Enter value to be inserted :");
                    value = sc.nextInt();
                    list.insertAtLast(value);
                    break;

                case 3:
                    try {
                        System.out.print("Enter value to be inserted : ");
                        value = sc.nextInt();
                        System.out.print("Enter the index where value is to be inserted: ");
                        index = sc.nextInt();
                        list.insertAtPosition(value, index);

                    } catch (IndexOutOfBoundsException e) {
                        e.printStackTrace();
                    }
                    break;

                case 4:
                    list.deleteFirst();
                    break;

                case 5:
                    list.deleteLast();
                    break;

                case 6:
                    try {
                        System.out.print("Enter the index to be deleted: ");
                        index = sc.nextInt();
                        list.deleteFromPosition(index);
                    } catch (IndexOutOfBoundsException e) {
                        e.printStackTrace();
                    }
                    break;

                case 7:
                    list.displayList();
                    break;

                case 8:
                    sc.close();
                    return;
                default:
                    System.out.println("Wrong Choice");
                    break;
            }

        }
    }
}
