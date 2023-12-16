#include <stdio.h>

int main()
{
    int row, column, space, n, no_of_rows;
    printf("Enter the number of rows\n");
    scanf("%d", &no_of_rows);
    for (row = 0; row < no_of_rows; row++)
    {
        for (space = 0; space <(no_of_rows-row) ; space++)
        {
            printf(" ");
        }
         n = 1;
        for (column = 0; column <= row; column++)
        {
            printf(" %d", n);
            n = n * (row - column) / (column + 1);
            //  printf("%d*(%d-%d)/(%d+1)",n,row,column,column);<----Check how the execution is taking place
        }
        printf("\n");
    }
     
    return 0;
}