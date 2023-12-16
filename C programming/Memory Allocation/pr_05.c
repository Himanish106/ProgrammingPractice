// Create an array of multiplication table of 7 upto 10(7x10=70).Use realloc to make it store 15 numbers(7x15)
#include <stdio.h>
#include <stdlib.h>
int main()
{
    int *ptr, i, mul;
    ptr = (int *)calloc(10, sizeof(int));
    printf("MEMORY ALLOCATION SUCCESSFULL\n");
    printf("Enter the array elements now\n");
    for (i = 0; i < 10; i++)
    {
        printf("ptr[%d]=", i);
        scanf("%d", &ptr[i]);
        printf("\n");
    }
    for (i = 0; i < 10; i++)
    {
        mul = 7 * ptr[i];
        printf("7x%d=%d\n", ptr[i], mul);
    }
    free(ptr);
    printf("Reallocating memory for 15 numbers\n");
    ptr = realloc(ptr, 15 * sizeof(int));
    for (i = 0; i < 15; i++)
    {
        printf("ptr[%d]=", i);
        scanf("%d", &ptr[i]);
        printf("\n");
    }
    for (i = 0; i < 15; i++)
    {
        mul = 7 * ptr[i];
        printf("7x%d=%d\n", ptr[i], mul);
    }
    return 0;
}