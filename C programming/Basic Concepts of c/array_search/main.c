#include <stdio.h>

int main()
{
    int arr[10], size, i, number_to_be_searched, pos, found = 0;
    printf("Enter array size\n");
    scanf("%d", &size);
    printf("Enter the array elements\n");
    for (i = 0; i < size; i++)
    {
        printf("arr[%d]=", i);
        scanf("%d", &arr[i]);
        printf("\n");
    }
    printf("Enter a number to be found\n");
    scanf("%d", &number_to_be_searched);
    for (i = 0; i < size; i++)
    {
        if (arr[i] == number_to_be_searched)
        {
            found = 1;
            pos = i;
            printf("The number %d is found at position %d", number_to_be_searched, pos);
            break;
        }
    }
    if (found == 0)
    {
        printf("%d does not exist in the array\n", number_to_be_searched);
    }
    return 0;
}
