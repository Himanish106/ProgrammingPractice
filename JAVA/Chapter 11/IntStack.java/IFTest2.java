class DynamicStack implements IntStack {
    private int stack[];
    private int top;

    // Allocate and initialize stack
    DynamicStack(int size) {
        stack = new int[size];
        top = -1;
    }

    @Override
    public void push(int item) {
        // If stack is full allocate a larger stack
        if (top == stack.length - 1) // Use length member
        {
            int temp[] = new int[stack.length * 2]; // double size
            for (int i = 0; i < stack.length; i++)
                temp[i] = stack[i];
            stack = temp;
            stack[++top] = item;
        } else
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

public class IFTest2 {
    public static void main(String[] args) {
        DynamicStack mystack1 = new DynamicStack(5);
        DynamicStack mystack2 = new DynamicStack(8);
        // THESE LOOPS CAUSE EACH STACK TO GROW
        for (int i = 0; i < 12; i++)
            mystack1.push(i);
        for (int i = 0; i < 20; i++)
            mystack2.push(i);
        // Pop those numbers off the stack
        System.out.println("Stack in my stack1");
        for (int i = 0; i < 12; i++)
            System.out.println(mystack1.pop());
        System.out.println("Stack in my stack2");
        for (int i = 0; i < 20; i++)
            System.out.println(mystack2.pop());
    }
}
