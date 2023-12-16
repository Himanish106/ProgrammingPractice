import java.util.Scanner;

public class pr_Q4
{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int[][] matrix1 =new int[2][3];
        int[][] matrix2 =new int[2][3];
        int[][] matrix3 =new int[2][3];
        System.out.println("Enter the elements of matrix 1");
        for (int i=0; i< matrix1.length; i++)
        {
            for (int j=0; j<matrix1[i].length; j++)
            {
                System.out.printf("matrix1[%d][%d]=",i,j);
                matrix1[i][j]= sc.nextInt();
            }
        }
        System.out.println("Enter the elements of matrix 2");
        for (int i=0; i< matrix2.length; i++)
        {
            for (int j=0; j<matrix2[i].length; j++)
            {
                System.out.printf("matrix2[%d][%d]=",i,j);
                matrix2[i][j]= sc.nextInt();
            }
        }
        System.out.println("Displaying Matrix 1");
        for (int i=0; i< matrix1.length; i++)
        {
            for (int j=0; j<matrix1[i].length; j++)
            {
                System.out.print(matrix1[i][j]);
                System.out.print(" ");
            }
            System.out.println("");
        }
        System.out.println("Displaying Matrix 2");
        for (int i=0; i< matrix2.length; i++)
        {
            for (int j=0; j<matrix2[i].length; j++)
            {
                System.out.print(matrix2[i][j]);
                System.out.print(" ");
            }
            System.out.println("");
        }
        System.out.println("The sum of the matrices are:- ");
        for (int i=0; i< matrix3.length; i++)
        {
            for (int j=0; j<matrix3[i].length; j++)
            {
                matrix3[i][j]=matrix1[i][j]+matrix2[i][j];
                System.out.print(matrix3[i][j]);
                System.out.print(" ");
            }
            System.out.println("");
        }
    }
}
