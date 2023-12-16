#include <stdio.h>

int main()
{
    int mat1[10][10], mat2[10][10], mul[10][10];
    int i, j, k, row, col1, col2;
    printf("Enter the number of rows and columns\n");
    scanf("%d %d", &row, &col1);
    printf("Enter the elements of first matrix\n");
    for (i = 0; i < row; i++)
    {
        for (j = 0; j < col1; j++)
        {
            scanf("%d", &mat1[i][j]);
        }
    }
    printf("Criteria is the number of columns of first matrix must be equal to number of rows of 2nd matrix\n");
    printf("Enter the number of columnns of 2nd matrix\n");
    scanf("%d", &col2);
    printf("Enter the elements of second matrix\n");
    for (i = 0; i < col1; i++)
    {
        for (j = 0; j < col2; j++)
        {
            scanf("%d", &mat2[i][j]);
        }
    }
    for (i = 0; i < row; i++)
    {
        for (j = 0; j < col2; j++)
        {
            mul[i][j] = 0;
            for (k = 0; k < col1; k++)
            {
                mul[i][j] = mul[i][j] + mat1[i][k] * mat2[k][j];
            }
        }
    }
    printf("The resultant matrix after multiplying\n");
    for (i = 0; i < row; i++)
    {
        for (j = 0; j < col2; j++)
        {
            printf("%d\t", mul[i][j]);
        }
        printf("\n");
    }
    return 0;
}