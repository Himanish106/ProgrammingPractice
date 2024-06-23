package DSA.LinkedLists.SinglyLinkedLists;

import DSA.LinkedLists.SinglyLinkedLists.Basic_LinkedLists01.SizeNotExistException;

public class Main01 {
    public static void main(String[] args) {
        Basic_LinkedLists01 list = new Basic_LinkedLists01();
        list.insertAtFirst(12);
        list.insertAtFirst(18);
        list.insertAtFirst(16);
        list.insertAtFirst(15);
        list.insertAtFirst(22);
        list.insertAtLast(89);
        try {
            list.insertAtPosition(54, 2);
        } catch (SizeNotExistException e) {
            e.printStackTrace();
        }
        list.displayList();
    }
}
