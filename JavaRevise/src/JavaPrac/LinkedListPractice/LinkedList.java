package JavaPrac.LinkedListPractice;

public class LinkedList {
    private Node head;
    private Node tail;
    private int size;

    public LinkedList() {
        this.size = 0;
    }

    public void insertAtFirst(int value) {
        Node node = new Node(value);
        node.next = head;
        head = node;
        if (tail == null) {
            tail = head;
        }
        size++;
    }

    public void insertAtLast(int value) {
        if (tail == null) {
            insertAtFirst(value);
            return;
        }

        Node node = new Node(value);
        tail.next = node;
        tail = node;
        size++;
    }

    public void insertAtPosition(int value, int index) throws IndexOutOfBoundsException {
        if (index < 0 || index > size) {
            throw new IndexOutOfBoundsException("Max Size is : " + size + ". Please enter within range");
        }
        if (index == 0) {
            insertAtFirst(value);
            return;
        }
        if (index == size) {
            insertAtLast(value);
            return;
        }
        Node temp = head;
        for (int i = 1; i < index; i++) {
            temp = temp.next;
        }
        Node node = new Node(value, temp.next);
        temp.next = node;
        size++;
    }

    public void displayList() {
        Node temp = head;
        System.out.println();
        while (temp != null) {
            System.out.print(temp.value + "--->");
            temp = temp.next;
        }
        System.out.println("END");
    }

    private class Node {
        private int value;
        private Node next;

        public Node(int value, Node next) {
            this.value = value;
            this.next = next;
        }

        public Node(int value) {
            this.value = value;
        }
    }
}
