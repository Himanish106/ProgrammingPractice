#include <stdio.h>
#include <stdlib.h>
int main()
{
    // Use of calloc
    int *ptr;
    int n;
    printf("Enter the size of array you want to create\n");
    scanf("%d", &n);
    ptr = (int *)calloc(n, sizeof(int));
    for (int i = 0; i < n; i++)
    {
        printf("ptr[%d]=", i);
        scanf("%d", &ptr[i]);
        printf("\n");
    }
    for (int i = 0; i < n; i++)
    {
        printf("The value at %d position of this array is %d\n", i, ptr[i]);
    }
    // Use of realloc
    printf("Enter the new size of array you want to create\n");
    scanf("%d", &n);
    ptr = (int *)realloc(ptr, n * sizeof(int));
    for (int i = 0; i < n; i++)
    {
        printf("ptr[%d]=", i);
        scanf("%d", &ptr[i]);
        printf("\n");
    }
    for (int i = 0; i < n; i++)
    {
        printf("The value at %d position of this array is %d\n", i, ptr[i]);
    }
    free(ptr);
    return 0;
}
