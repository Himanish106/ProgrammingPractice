interface IntStack {
    void push(int item); // Store an item

    int pop(); // Retrieve an item
}

// An implementation of IntStack that uses fixed storage
class FixedStack implements IntStack {
    private int stack[];
    private int top;

    // Allocate and initialize stack
    FixedStack(int size) {
        stack = new int[size];
        top = -1;
    }

    @Override
    public void push(int item) {
        if (top == stack.length - 1) // Use length member
            System.out.println("Stack Full");
        else
            stack[++top] = item;
    }

    @Override
    public int pop() {
        if (top == -1) {
            System.out.println("Stack Underflow!");
            return 0;
        } else
            return stack[top--];
    }
}

public class IFTest {
    public static void main(String[] args) {
        FixedStack mystack1 = new FixedStack(5);
        FixedStack mystack2 = new FixedStack(8);
        // Push some numbers onto the stack
        for (int i = 0; i < 5; i++)
            mystack1.push(i);
        for (int i = 0; i < 8; i++)
            mystack2.push(i);
        // Pop those numbers off the stack
        System.out.println("Stack in my stack1");
        for (int i = 0; i < 5; i++)
            System.out.println(mystack1.pop());
        System.out.println("Stack in my stack2");
        for (int i = 0; i < 8; i++)
            System.out.println(mystack2.pop());
    }
}
