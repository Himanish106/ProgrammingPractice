#include <stdio.h>

int main()
{
    int i, j, temp, n, index_of_min;
    int arr[10];
    printf("Enter array size\n");
    scanf("%d", &n);
    printf("Create an array of n elements\n");
    for (i = 0; i < n; i++)
    {
        printf("arr[%d]=", i);
        scanf("%d", &arr[i]);
        printf("\n");
    }
    for (i = 0; i < n - 1; i++)
    {
        index_of_min = i;
        for (j = i + 1; j < n; j++)
        {
            if (arr[j] < arr[index_of_min])
            {
                index_of_min = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[index_of_min];
        arr[index_of_min] = temp;
    }
    printf("The array after sorting\n");
    for (i = 0; i < n; i++)
    {
        printf("%d\t", arr[i]);
    }
    return 0;
}