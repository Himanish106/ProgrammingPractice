#include <stdio.h>
#include <stdlib.h>
int main()
{
    int *ptr;
    ptr = (int *)malloc(6 * sizeof(int));
    for (int i = 0; i < 6; i++)
    {
        printf("ptr[%d]=", i);
        scanf("%d", &ptr[i]);
        printf("\n");
        free(ptr);
    }
    for (int i = 0; i < 6; i++)
    {
        printf("The value at %d position of this array is %d\n", i, ptr[i]);
    }
    // Now i want to enter 10 integers
    // So in order to do that we will use realloc()
    printf("Reallocate memory\n");
    ptr = realloc(ptr, 10 * sizeof(int));
    for (int i = 0; i < 10; i++)
    {
        printf("ptr[%d]=", i);
        scanf("%d", &ptr[i]);
        printf("\n");
        free(ptr);
    }
    for (int i = 0; i < 10; i++)
    {
        printf("The value at %d position of this array is %d\n", i, ptr[i]);
    }
    return 0;
}