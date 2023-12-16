#include <stdio.h>
int main()
{
    int arr[10][10];
    int i, j, r, c;
    printf("Enter rows and columns\n");
    scanf("%d %d", &r, &c);
    printf("Enter array elements\n");
    for (i = 0; i < r; i++)
    {
        for (j = 0; j < c; j++)
        {
            printf("arr[%d][%d]=", i, j);
            scanf("%d", &arr[i][j]);
            printf("\n");
        }
    }
    if (r == c)
    {
        printf("The left diagonal elements are\n");
        for (i = 0; i < r; i++)
        {
            for (j = 0; j < c; j++)
            {
                if (i == j)
                {
                    printf("%d\t", arr[i][j]);
                }
            }
            printf("\n");
        }
        printf("The right diagonal elements are\n");
        for (i = 0; i < r; i++)
        {
            for (j = 0; j < c; j++)
            {
                if (i + j == r - 1)
                {
                    printf("%d\t", arr[i][j]);
                }
            }
            printf("\n");
        }
    }
    else
        printf("Since number of rows and columns are not equal so printing diagonal elements is not possible");
    return 0;
}