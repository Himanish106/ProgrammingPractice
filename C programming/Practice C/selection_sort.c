#include <stdio.h>
#include <stdlib.h>
int main()
{
    int *ptr;
    int n, i, j, index_of_min, temp;
    printf("Enter array size\n");
    scanf("%d", &n);
    ptr = (int *)calloc(n, sizeof(int));
    printf("Memory allocation succesfull\n");
    printf("Create the array\n");
    for (i = 0; i < n; i++)
    {
        printf("arr[%d]=", i);
        scanf("%d", &ptr[i]);
        printf("\n");
    }
    printf("Sorting the array using selection sort\n");
    for (i = 0; i < n - 1; i++)
    {
        index_of_min = i;
        for (j = i + 1; j < n; j++)
        {
            if (ptr[j] < ptr[index_of_min])
            {
                index_of_min = j;
            }
        }
        temp = ptr[i];
        ptr[i] = ptr[index_of_min];
        ptr[index_of_min] = temp;
    }
    printf("The array after sorting is \n");
    for (i = 0; i < n; i++)
    {
        printf("arr[%d]=%d\t", i, ptr[i]);
    }
    return 0;
}