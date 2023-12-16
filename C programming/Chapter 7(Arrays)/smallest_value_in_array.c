#include <stdio.h>

int main()
{
    int arr[100], n, i, smallest,pos;
    printf("Enter the size of an array\n");
    scanf("%d", &n);
    for (i = 0; i < n; i++)
    {
        printf("\narr[%d] =", i);
        scanf("%d", &arr[i]);
    }
    smallest = arr[0];
    for (i = 0; i < n; i++)
    {
        if (smallest>arr[i])
        {
            smallest = arr[i];
            pos=i;
        }
    }
    printf("arr[%d]=%d is the smallest", pos, smallest);
    return 0;
}