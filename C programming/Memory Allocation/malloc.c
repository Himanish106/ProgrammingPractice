#include <stdio.h>
#include <stdlib.h> //Calloc malloc comes under stdlib.h
int main()
{
    // Use of malloc
    int *ptr;
    int n;
    printf("Enter the size of array you want to create\n");
    scanf("%d", &n);
    ptr = (int *)malloc(n * sizeof(int));
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
    return 0;
}