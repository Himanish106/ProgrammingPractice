#include <stdio.h>

int main()
{
    int i, n, small, large, ar[100], temp;
    printf("Enter range\n");
    scanf("%d", &n);
    for (i = 0; i < n; i++)
    {
        printf("ar[%d] =", i);
        scanf("%d", &ar[i]);
    }
    large = ar[0];
    small = ar[1];
    if (small > large)
    {
        temp = small;
        small = large;
        large = temp;
    }
    for (i = 2; i < n; i++)
    {
        if (ar[i] > large)
        {
            large=ar[i];
        }
        else if (ar[i] < small)
        {
            small=ar[i];
        }
    }
    printf("Largest value in the array is %d and smallest value in the array is %d", large, small);
    return 0;
}