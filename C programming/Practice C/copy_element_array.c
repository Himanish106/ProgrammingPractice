#include <stdio.h>
#include <stdlib.h>
int main()
{
    int *arr1, *arr2;
    int n1;
    printf("Creating array1 and array2 using dynamic memory allocation\n");
    printf("Enter the size for array1 and array2\n");
    scanf("%d", &n1);
    arr1 = (int *)malloc(n1 * sizeof(int));
    arr2 = (int *)malloc(n1 * sizeof(int));
    printf("Enter the elements of arr1\n");
    for (int i = 0; i < n1; i++)
    {
        printf("arr1[%d]=", i);
        scanf("%d", &arr1[i]);
        printf("\n");
    }
    printf("Passing the elements of arr1 to arr2\n ");
    for (int i = 0; i < n1; i++)
    {
        arr2[i] = arr1[i];
        // printf("arr2[%d]=%d", i, arr2[i]);
        printf("\n");
    }
    return 0;
}