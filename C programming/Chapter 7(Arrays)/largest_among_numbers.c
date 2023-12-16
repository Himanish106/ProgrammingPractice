#include <stdio.h>

int main()
{
    int arr[100], n, i, largest,pos;
    printf("Enter the size of an array\n");
    scanf("%d", &n);
    for (i = 0; i < n; i++)
    {
        printf("\narr[%d] =", i);
        scanf("%d", &arr[i]);
    }
    largest = 0;
    for (i = 0; i < n; i++)
    {
        if (arr[i] > largest)
        {
            largest = arr[i];
            pos=i;
        }
    }
    printf("arr[%d]=%d is the largest", pos, largest);
    return 0;
}