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

    public int deleteFirst() {
        int val = head.value;
        head = head.next;
        if (head == null) {
            tail = null;
        }
        size--;
        return val;
    }

    public int deleteLast() {
        if (size <= 1) {
            return deleteFirst();
        }
        Node secondLast = get(size - 2);
        int val = tail.value;
        tail = secondLast;
        tail.next = null;
        return val;
    }

    public int deleteFromPosition(int index) throws SizeNotExistException {
        if (index < 0 || index > size) {
            throw new SizeNotExistException("Max Size is: " + size + ". Please enter within range");
        }
        if (index == 0) {
            return deleteFirst();
        }
        if (index == size) {
            return deleteLast();
        }

        Node prev = get(index - 1);
        int val = prev.next.value;
        prev.next = prev.next.next;
        return val;
    }

    public Node findNode(int value) {
        Node node = head;
        while (node != null) {
            if (node.value == value) {
                return node;
            }
            node = node.next;
        }
        return null;
    }

    public Node get(int index) {
        Node node = head;
        for (int i = 0; i < index; i++) {
            node = node.next;
        }
        return node;
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
