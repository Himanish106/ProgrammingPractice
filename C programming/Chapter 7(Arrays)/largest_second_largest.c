#include <stdio.h>

int main()
{
    int arr[100], i, n, max1, max2, temp;
    printf("Enter range\n");
    scanf("%d", &n);
    for (i = 0; i < n; i++)
    {
        printf("\narr[%d]=", i);
        scanf("%d", &arr[i]);
    }
    max1 = arr[0];
    max2 = arr[1];
    if (max2 > max1)
    {
        temp = max2;
        max2 = max1;
        max1 = temp;
    }

    for (i = 2; i < n; i++)
    {
        if (arr[i] > max1)
        {
            max2=max1;
            max1 = arr[i];
        }
        else if (arr[i] > max2)
        {
            max2 = arr[i];
        }
    }
    printf("%d is the largest and %d is second largest \n", max1, max2);
    return 0;
}