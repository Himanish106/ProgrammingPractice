#include <stdio.h>

int main()
{
    int arr[3][3] = {{6, 2, 5},
                     {0, 1, 3},
                     {4, 9, 8}};
    int *p;
    p = &arr[0][0];
    printf("%u", arr[0]);
    return 0;
}