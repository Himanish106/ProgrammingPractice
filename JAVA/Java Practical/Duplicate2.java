public class Duplicate2 {
    static int removeDuplicate(int arr[]) {
        int index = 1;
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] != arr[index - 1]) {
                arr[index++] = arr[i];
            }
        }
        return index;
    }

    public static void main(String[] args) {
        int arr[] = { 20, 20, 30, 30, 40, 50, 50, 50 };
        System.out.println(removeDuplicate(arr));
    }
}
