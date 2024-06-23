package DSA.LinkedLists.DoublyLinkedLists;

public class Main {
    public static void main(String[] args) {
        DoublyLinkedLists doublyLinkedLists=new DoublyLinkedLists();
        System.out.println();
        doublyLinkedLists.insertAtFirst(25);
        doublyLinkedLists.insertAtFirst(30);
        doublyLinkedLists.insertAtLast(32);
        doublyLinkedLists.insertAtLast(26);
        doublyLinkedLists.insertAfterAValue(30, 65);
        doublyLinkedLists.displayList();
    }
}
