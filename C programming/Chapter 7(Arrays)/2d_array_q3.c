#include <stdio.h>

int main()
{
    int i, j;
    int stud[4][2] = {
        {1234, 56},
        {1212, 33},
        {1434, 80},
        {1312, 78}};

    for (i = 0; i < 4; i++)
    {
        for (j = 0; j < 2; j++)
            printf("%d  ", *(*(stud + i) + j));
        printf("\n");
    }
    return 0;
}