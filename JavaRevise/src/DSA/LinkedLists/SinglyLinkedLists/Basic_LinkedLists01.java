package DSA.LinkedLists.SinglyLinkedLists;

public class Basic_LinkedLists01 {

    private Node head;
    private Node tail;
    private int size;

    public Basic_LinkedLists01() {
        this.size = 0;
    }

    public void insertAtFirst(int value) {
        Node node = new Node(value);
        node.next = head;
        head = node;
        if (tail == null) {
            tail = head;
        }
        size += 1;
    }

    public void insertAtLast(int value) {
        if (tail == null) {
            insertAtFirst(value);
            return;
        }
        Node node = new Node(value);
        tail.next = node;
        tail = node;

        // When inserting a node at the end of a singly linked list, you don't need to
        // explicitly set tail.next to null in your insertAtLast method. Here’s why:

        // When you create a new node (Node node = new Node(value);), the next pointer
        // of this new node is initially set to null by default (as long as your Node
        // constructor does not explicitly set it otherwise).
        // When you update tail.next to point to this new node and then update tail to
        // this new node, the new node’s next pointer will already be null.
        size = size + 1;
    }

    public void insertAtPosition(int val, int index) throws SizeNotExistException {
        if (index < 0 || index > size) {
            throw new SizeNotExistException("Max Size is: " + size + ". Please enter within range");
        }
        if (index == 0) {
            insertAtFirst(val);
            return;
        }
        if (index == size) {
            insertAtLast(val);
            return;
        }

        Node temp = head;
        for (int i = 1; i < index; i++) {
            temp = temp.next;
        }
        Node node = new Node(val, temp.next);
        temp.next = node;
        size++;
    }

    public void displayList() {
        Node temp = head;
        while (temp != null) {
            System.out.print(temp.value + "-->");
            temp = temp.next;
        }
        System.out.println("END");
    }

    private class Node {
        private int value;
        private Node next;

        public Node(int value) {
            this.value = value;
        }

        public Node(int value, Node next) {
            this.value = value;
            this.next = next;
        }

    }

    public class SizeNotExistException extends Exception {
        public SizeNotExistException(String message) {
            super(message);
        }
    }
}
