#include <stdio.h>
#include <stdlib.h>
int main()
{
    int *ptr;
    int i, n;
    printf("Enter the size of the array as per user requirements\n");
    scanf("%d", &n);
    ptr = (int *)calloc(n, sizeof(int));
    if (ptr == NULL)
    {
        printf("MEMORY ALLOCATION FAILED");
        exit(0);
    }
    for (i = 0; i < 7; i++)
    {
        printf("Enter element %d\n", i + 1);
        scanf("%d", &ptr[i]);
    }
    for (i = 0; i < n; i++)
    {
        printf("The element at position %d is %d\n", i + 1, ptr[i]);
    }
    return 0;
}