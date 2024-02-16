package PersonalTesting;

import java.util.ArrayList;

public class ArrayPrac {

    static class ContiguousSum {

        boolean isSumFound;
        ArrayList<Integer> values;

        public ContiguousSum(boolean isSumFound, ArrayList<Integer> values) {
            this.isSumFound = isSumFound;
            this.values = values;
        }

    }

    static ContiguousSum contiguousSum(int arr[], int target) {

        for (int i = 0; i < arr.length; i++) {
            int sum = 0;
            ArrayList<Integer> elements = new ArrayList<>();
            for (int j = i; j < arr.length; j++) {
                sum = sum + arr[j];
                elements.add(arr[j]);
                if (sum == target) {
                    return new ContiguousSum(true, elements);
                }
            }

        }
        return new ContiguousSum(false, new ArrayList<>());
    }

    public static void main(String[] args) {
        int arr[] = {1, 2, 3, 4};
        int target = 7;
        ContiguousSum res = contiguousSum(arr, target);
        if (res.isSumFound) {
            System.out.println("True");
            System.out.println(res.values);
        } else {
            System.out.println("False");
        }
    }
}
