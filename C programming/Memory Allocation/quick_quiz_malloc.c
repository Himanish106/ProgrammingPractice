#include <stdio.h>
#include <stdlib.h>
int main()
{
    float *ptr;
    int i;
    ptr = (float *)malloc(5 * sizeof(float));
    for (i = 0; i < 5; i++)
    {
        printf("Enter element %d\n", i + 1);
        scanf("%f", &ptr[i]);
    }
    for (i = 0; i < 5; i++)
    {
        printf("The element at position %d is %.2f\n", i + 1, ptr[i]);
    }
    return 0;
}