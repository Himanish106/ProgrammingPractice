#include <stdio.h>

int main()
{
    int arr[10];
    int i, j, is_sorted, n, temp;
    printf("Enter array size\n");
    scanf("%d", &n);
    printf("Enter array elements\n");
    for (i = 0; i < n; i++)
    {
        printf("arr[%d]=", i);
        scanf("%d", &arr[i]);
        printf("\n");
    }
    for (i = 0; i < n - 1; i++)
    {

        is_sorted = 1;
        for (j = 0; j < n - 1 - i; j++)
        {
            if (arr[j + 1] < arr[j])
            {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                is_sorted = 0;
            }
        }
        if (is_sorted)
        {
            break;
        }
    }
    printf("Total Passes=%d\n", i + 1);
    printf("The array after sorting:-\n");
    for (i = 0; i < n; i++)
    {
        printf("%d\t", arr[i]);
    }
    return 0;
}