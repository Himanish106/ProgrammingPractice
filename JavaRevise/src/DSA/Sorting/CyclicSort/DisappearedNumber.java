package DSA.Sorting.CyclicSort;
//https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

import java.util.ArrayList;
import java.util.List;

public class DisappearedNumber {

    public static void main(String[] args) {
        int nums[] = {4, 3, 2, 7, 8, 2, 3, 1};
        System.out.println(findDisappearedNumbers(nums));
    }

    public static List<Integer> findDisappearedNumbers(int[] nums) {
        List<Integer> res = new ArrayList<>();
        int pointer = 0;
        while (pointer < nums.length) {
            int correctIndex = nums[pointer] - 1;
            if (nums[pointer] != nums[correctIndex]) {
                swap(nums, pointer, correctIndex);
            } else {
                pointer++;
            }
        }
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != i + 1) {
                res.add(i + 1);
            }
        }
        return res;
    }

    static void swap(int arr[], int pointer, int correctIndex) {
        int temp = arr[pointer];
        arr[pointer] = arr[correctIndex];
        arr[correctIndex] = temp;
    }
}
