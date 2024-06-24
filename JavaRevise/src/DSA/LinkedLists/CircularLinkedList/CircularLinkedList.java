package DSA.LinkedLists.CircularLinkedList;

public class CircularLinkedList {

    private Node head;
    private Node tail;

    public CircularLinkedList() {
        this.head = null;
        this.tail = null;
    }

    public void insert(int val) {
        Node node = new Node(val);
        if (head == null) {
            head = node;
            tail = node;
            return;
        }
        tail.next = node;
        node.next = head;
        tail = node;
    }

    public void delete(int val) {
        if (head == null) {
            System.out.println("List is Empty: ");
            return;
        }
        Node prev = findPrevNode(val);
        if (prev == null) {
            System.out.println("Node with value: " + val + " does not exists in the list");
            return;
        }
        Node target = prev.next;
        if (target == head) {
            if (head == tail) {
                head = null;
                tail = null;
            } else {
                head = head.next;
                tail.next = head;
            }
        } else if (target == tail) {
            prev.next = head;
            tail = prev;
        } else {
            prev.next = target.next;
        }
    }

    private Node findPrevNode(int value) {
        Node temp = head;
        if (head != null) {
            do {
                if (temp.next.val == value) {
                    return temp;
                }
                temp = temp.next;
            } while (temp != head);
        }
        return null;
    }

    public void displayList() {
        Node node = head;
        if (head != null) {
            do {
                System.out.print(node.val + "--->");
                node = node.next;
            } while (node != head);
            System.out.println("HEAD");
        }
    }

    private class Node {
        int val;
        Node next;

        public Node(int val, Node next) {
            this.val = val;
            this.next = next;
        }

        public Node(int val) {
            this.val = val;
        }
    }
}
