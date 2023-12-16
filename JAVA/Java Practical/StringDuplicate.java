import java.util.Scanner;

public class StringDuplicate {
    static void findDuplicate(String arr[]) {
        int flag = 0;
        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i].equals(arr[j])) {
                    System.out.println(arr[i]);
                    flag = 1;
                    break;
                }
            }
        }
        if (flag == 0) {
            System.out.println("No duplicae elements found");
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the range of the string array");
        int n = sc.nextInt();
        String arr[] = new String[n];
        System.out.println("Enter the elements in the String");
        for (int i = 0; i < arr.length; i++) {
            arr[i] = sc.next();
        }
        findDuplicate(arr);
    }
}
