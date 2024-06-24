package DSA.LinkedLists.CircularLinkedList;

public class Main {
    public static void main(String[] args) {
        CircularLinkedList list = new CircularLinkedList();
        list.insert(22);
        list.insert(18);
        list.insert(16);
        list.insert(87);
        list.insert(60);
        System.out.println();
        list.displayList();
        list.delete(18);
        list.delete(60);
        list.delete(22);
        list.delete(100);
        list.displayList();
        }
}
