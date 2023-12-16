// WAP to display n numbers using an array
#include <stdio.h>

int main()
{
    int arr[100], i, n;
    printf("Enter the number of elements in an array\n");
    scanf("%d", &n);
    for (i = 0; i < n; i++)
    {
        printf("Arr[%d]\n", i);
        scanf("%d", &arr[i]);
    }
    for (i = 0; i < n; i++)
    {
        printf("Arr[%d]=%d\n", i, arr[i]);
    }
    return 0;
}