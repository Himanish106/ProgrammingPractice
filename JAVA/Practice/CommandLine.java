//Display all command-line arguments.
class CommandLine {
    public static void main(String args[]) {
        System.out.println("The command-line arguments are:\n");
        for (int x = 0; x < args.length; x++)
            System.out.println("args[" + x + "]: " + args[x]);
    }
}