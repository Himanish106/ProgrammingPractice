package JavaPrac;

import java.util.Arrays;
import java.util.Scanner;
public class Search2DArray13 {
    
    public static void main(String[] args) {
        int arr[][] = {{32, 21, 15},
        {42, 56, 78, 90},
        {22, 67, 105, 157, 43, 95},
        {88, 56, 106, 42, 82, 99}};
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter an element to be searched:");
        int target = sc.nextInt();
        int[]result=search(arr, target);
        if(result[0]==-1 && result[1]==-1){
            System.out.println("Element not found");
            return;
        }
        System.out.println("Element found at position: " + Arrays.toString(search(arr, target)));
    }
    
    static int[] search(int[][] arr, int target) {
        for (int row = 0; row < arr.length; row++) {
            for (int col = 0; col < arr[row].length; col++) {
                if (arr[row][col] == target) {
                    return new int[]{row, col};
                }
            }
        }
        return new int[]{-1, -1};
    }
}
