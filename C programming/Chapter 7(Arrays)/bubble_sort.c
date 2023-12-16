#include <stdio.h>

int main()
{
    int arr[10], i, j, n, temp;
    int is_Sorted = 0;
    printf("Enter array size\n");
    scanf("%d", &n);
    printf("Enter array elements\n");
    for (i = 0; i < n; i++)
    {
        printf("arr[%d]=", i);
        scanf("%d", &arr[i]);
        printf("\n");
    }
    for (i = 0; i < n - 1; i++) // For number of passes
    {
        printf("Number of passes=%d\n", i + 1);
        is_Sorted = 1;
        for (j = 0; j < n - 1 - i; j++) // For number of comparisons
        {
            if (arr[j] > arr[j + 1])
            {
                temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                is_Sorted = 0;
            }
        }
        if (is_Sorted)
        {
            break;
        }
    }
    printf("The array after sorting is \n");
    for (i = 0; i < n; i++)
    {
        printf("%d\t", arr[i]);
    }
    return 0;
}