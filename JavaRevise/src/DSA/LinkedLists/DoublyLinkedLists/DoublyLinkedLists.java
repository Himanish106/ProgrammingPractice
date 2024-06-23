package DSA.LinkedLists.DoublyLinkedLists;

public class DoublyLinkedLists {

    private Node head;

    public void insertAtFirst(int value) {
        Node node = new Node(value);
        node.next = head;
        node.prev = null;
        if (head != null) {
            head.prev = node;
        }
        head = node;
    }

    public void insertAtLast(int value) {
        if (head == null) {
            insertAtFirst(value);
            return;
        }
        Node node = new Node(value);

        Node tempNode = head;
        Node last = null;

        while (tempNode != null) {
            last = tempNode;
            tempNode = tempNode.next;
        }

        last.next = node;
        node.prev = last;
        last = node;
    }

    // Insert at Position same as Singly Linked Lists

    public void insertAfterAValue(int after, int val) {
        Node currentNode = head;
        while (currentNode != null && currentNode.value != after) {
            currentNode = currentNode.next;
        }

        if (currentNode == null) {
            System.out.println("Node with value:" + after + " not found");
            return;
        }
        Node newNode = new Node(val);
        newNode.next = currentNode.next;
        newNode.prev = currentNode;
        if (currentNode.next != null) {
            currentNode.next.prev = newNode;
        }
        currentNode.next = newNode;
    }

    public void displayList() {
        Node node = head;
        Node last = null;
        while (node != null) {
            System.out.print(node.value + "-->");
            last = node;
            node = node.next;
        }
        System.out.println("END");

        while (last != null) {
            System.out.print(last.value + "<---");
            last = last.prev;
        }
        System.out.println("START");
    }

    private class Node {
        int value;
        Node next;
        Node prev;

        public Node(int value, Node next, Node prev) {
            this.value = value;
            this.next = next;
            this.prev = prev;
        }

        public Node(int value) {
            this.value = value;
        }

    }
}
