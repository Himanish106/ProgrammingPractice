// Given an array nums of integers, return how many of them contain an even number of digits.
package JavaPrac;

public class SearchQ15 {

    public static void main(String[] args) {
        int nums[] = {12, 345, 2, 6, 7896,-4567};
        System.out.println(findNumbers(nums));
    }

    static int findNumbers(int[] nums) {
        int count = 0;
        for (int i = 0; i < nums.length; i++) {
            if (Integer.toString(Math.abs(nums[i])).length() % 2 == 0) {
                count++;
            }
        }
        return count;
    }
}
