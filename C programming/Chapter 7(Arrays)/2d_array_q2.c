#include <stdio.h>

int main()
{
    int i;
    int stud[4][2] = {
        {1234, 56},
        {1212, 33},
        {1434, 80},
        {1312, 78}};

    for (i = 0; i < 4; i++)
        printf("The address of %dth 1D array is %u\n", i, stud[i]);
    return 0;
}