#include <stdio.h>
#include <stdlib.h> 
int main()
{
    int *ptr;
  int *ptr2;
    ptr = (int *)malloc(600 * sizeof(int));
    for (int i = 0; i < 600; i++)
    {
        ptr2 = (int *)malloc(6000000 * sizeof(int));
        printf("ptr[%d]=", i);
        scanf("%d", &ptr[i]);
        printf("\n");
        free(ptr2);
    }
    for (int i = 0; i < 6; i++)
    {
        printf("The value at %d position of this array is %d\n", i, ptr[i]);
    }
    return 0;
}