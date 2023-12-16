#include <stdio.h>
#include <stdlib.h>
void printarray(int *arr, int size)
{
    for (int i = 0; i < size; i++)
    {
        printf("ptr[%d]=%d\t", i, arr[i]);
    }
    printf("\n");
}
void bubble_sort(int *arr, int size)
{
    int i, j, temp;
    for (i = 0; i < size - 1; i++)
    {
        for (j = 0; j < size - 1 - i; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
int main()
{
    int *ptr;
    int n, i;
    printf("Enter the size of the array you want to create\n");
    scanf("%d", &n);
    ptr = (int *)calloc(n, sizeof(int));
    printf("\033[0;31m");
    printf("Memory Allocation Successful\n");
    printf("\033[0m");
    printf("Create the array\n");
    for (i = 0; i < n; i++)
    {
        printf("arr[%d]=", i);
        scanf("%d", &ptr[i]);
        printf("\n");
    }
    printf("The array before sorting\n");
    printarray(ptr, n);
    bubble_sort(ptr, n);
    printf("The array after sorting\n");
    printarray(ptr, n);
    return 0;
}
