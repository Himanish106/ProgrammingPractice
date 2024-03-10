package DSA.Sorting.CyclicSort;
//https://leetcode.com/problems/missing-number/

public class MissingNumber {

    public int missingNumber(int[] nums) {
        int pointer = 0;
        while (pointer < nums.length) {
            int correctIndex = nums[pointer];
            if (nums[pointer] < nums.length && nums[pointer] != nums[correctIndex]) {
                swap(nums, pointer, correctIndex);
            } else {
                pointer++;
            }
        }
        for (int index = 0; index < nums.length; index++) {
            if (nums[index] != index) {
                return index;
            }
        }
        return nums.length;
    }

    static void swap(int arr[], int pointer, int correctIndex) {
        int temp = arr[pointer];
        arr[pointer] = arr[correctIndex];
        arr[correctIndex] = temp;
    }
}
