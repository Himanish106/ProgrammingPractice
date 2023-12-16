#include <stdio.h>

int main()
{
    int n, i, arr[100], smallest, second_smallest, temp;
    printf("Enter range\n");
    scanf("%d", &n);
    for (i = 0; i < n; i++)
    {
        printf("arr[%d] =", i);
        scanf("%d", &arr[i]);
    }
    smallest = arr[0];
    second_smallest = arr[1];
    if (second_smallest < smallest)
    {
        temp = second_smallest;
        second_smallest = smallest;
        smallest = temp;
    }
    for (i = 2; i < n; i++)
    {
        if (smallest > arr[i])
        {
            second_smallest = smallest;
            smallest = arr[i];
        }
        else if (second_smallest > arr[i])
        {
            second_smallest = arr[i];
        }
    }
    printf("%d is the smallest and %d is the second smallest", smallest, second_smallest);
    return 0;
}