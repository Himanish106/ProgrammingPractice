#include <stdio.h>

int main()
{
    int mat[3][3], trans[3][3];
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
    for (i = 0; i < row; i++)
    {
        for (j = 0; j < col; j++)
        {
            trans[j][i] = mat[i][j];
        }
    }
    printf("The elements of matrix after transpose :\n");
    for (i = 0; i < row; i++)
    {
        for (j = 0; j < col; j++)
        {
            printf("%d\t", trans[i][j]);
        }
        printf("\n");
    }
    return 0;
}