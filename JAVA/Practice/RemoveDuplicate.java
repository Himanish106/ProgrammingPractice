class DuplicateRemove {
    public int arraySort(int[] arr) {
        int index = 0;
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] != arr[index])
            {
            // if (arr[i] != arr[index]) {
                index++;
                arr[index] = arr[i];
            }
        }
        return index;
    }
}

public class RemoveDuplicate {
    public static void main(String[] args) {
        DuplicateRemove d = new DuplicateRemove();
        int arr[] = { 20, 30, 40, 50, 50, 50 };
        System.out.println("Original Array length: " + arr.length);
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println("\nNew array length= " + d.arraySort(arr));
    }
}
