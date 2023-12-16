#include <stdio.h>

int main()
{
    int arr1[10][10], arr2[10][10], sum[10][10];
    int i, j, row, col;
    printf("Enter the number of rows and columns\n");
    scanf("%d %d", &row, &col);
    printf("Enter the elements of 1st matrix\n");
    for (i = 0; i < row; i++)
    {
        for (j = 0; j < col; j++)
        {
            scanf("%d", &arr1[i][j]);
        }
    }
    printf("Enter the elements of second matrix\n");
    for (i = 0; i < row; i++)
    {
        for (j = 0; j < col; j++)
        {
            scanf("%d", &arr2[i][j]);
        }
    }
    for (i = 0; i < row; i++)
    {
        for (j = 0; j < col; j++)
        {
            sum[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
    printf("The resultant matrix after addition is :\n");
    for (i = 0; i < row; i++)
    {
        for (j = 0; j < col; j++)
        {
            printf("%d\t", sum[i][j]);
        }
        printf("\n");
    }
    return 0;
}