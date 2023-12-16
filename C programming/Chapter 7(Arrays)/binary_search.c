#include <stdio.h>

int main()
{
    int i, arr[10], n, middle, high, low, num;
    printf("Enter array size\n");
    scanf("%d", &n);
    printf("Create array\n");
    for (i = 0; i < n; i++)
    {
        printf("arr[%d]=", i);
        scanf("%d", &arr[i]);
    }
    printf("Enter a number to be searched\n");
    scanf("%d", &num);
    
        low = 0;
        high = n - 1;
        middle = (low + high) / 2;
        while (low <= high)
        {
            if (arr[middle] == num)
            {
                printf("Element is found at position %d\n",middle);
                break;
            }
            if (arr[middle] < num)
            {
                low = middle+1;
            }
            else
                high = middle-1;
                middle=(low+high)/2;
        }
    if (low > high)
    {
        printf("Not found\n");
    }
    return 0;
}