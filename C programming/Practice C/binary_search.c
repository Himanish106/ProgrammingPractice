#include <stdio.h>
#include <stdlib.h>
int main()
{
    int *ptr;
    int n, i, min, mid, max, number_to_be_searched;
    printf("Enter array size\n");
    scanf("%d", &n);
    ptr = (int *)calloc(n, sizeof(int));
    printf("Memory allocation succesfull\n");
    printf("Create the array\n");
    for (i = 0; i < n; i++)
    {
        printf("ptr[%d]=", i);
        scanf("%d", &ptr[i]);
        printf("\n");
    }
    printf("Enter a number to be searched\n");
    scanf("%d", &number_to_be_searched);
    min = 0;
    max = n - 1;
    mid = (min + max) / 2;
    while (min <= max)
    {
        if (ptr[mid] == number_to_be_searched)
        {
            printf("Element %d is found at position %d\n", number_to_be_searched, mid);
            break;
        }
        if (ptr[mid] < number_to_be_searched)
            min = mid + 1;
        else
            max = mid - 1;
        mid = (min + max) / 2;
    }
    if (min > max)
        printf("NOT FOUND");
    return 0;
}