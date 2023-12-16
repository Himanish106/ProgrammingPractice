#include <stdio.h>

int main()
{
    int arr[10], n, i, num, pos, found = 0;
    printf("Enter the number of elements in the matrix\n");
    scanf("%d", &n);
    printf("Enter the array elements\n");
    for (i = 0; i < n; i++)
    {
        printf("arr[%d]=", i);
        scanf("%d", &arr[i]);
    }
    printf("Enter a number to be found\n");
    scanf("%d", &num);
    for (i = 0; i < n; i++)
    {
        if (arr[i] == num)
        {
            found = 1;
            pos = i;
            printf("The number %d is found at position %d", num, pos);
            break;
        }
    }
    if (found == 0)
    {
        printf("The number %d is not found\n", num);
    }
    return 0;
}