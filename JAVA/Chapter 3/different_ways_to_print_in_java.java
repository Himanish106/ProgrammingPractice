public class different_ways_to_print_in_java
{
    public static void main(String[] args) {
        /*
        We already know about:-
        System.out.println()---> Prints a newline at the end
        System.out.print()---> No new line at the end
        So here we are going to learn about
        System.out.printf()
        System.out.format()
        */
        int a=22;
        float b=24.62f;
        System.out.printf("The value of a is %d and value of b is %8.2f",a,b);
//        %8f means it takes 8 spaces including the number
//        System.out.format("The value of a is %d and value of b is %f",a,b);
//        Both printf and format works in the same way
    }
}
