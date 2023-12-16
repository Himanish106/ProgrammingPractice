// Write a program to read and display a 3x3 matrix
#include <stdio.h>

int main()
{
    int mat[3][3];
    int i, j, row, col;
    printf("Enter the number of rows and columns\n");
    scanf("%d %d", &row, &col);
    printf("Enter the elements of matrix\n");
    for (i = 0; i < row; i++)
    {
        for (j = 0; j < col; j++)
        {
            scanf("%d", &mat[i][j]);
        }
    }
    printf("The elements of matrix are :\n");
    for (i = 0; i < row; i++)
    {
        for (j = 0; j < col; j++)
        {
            printf("%d\t", mat[i][j]);
        }
        printf("\n");
    }
    return 0;
}