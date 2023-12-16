// Write a program containing functions which counts the number of positive integers in an array
// #include <stdio.h>
// void count_positive(int[], int);
// int main()
// {
//     int arr[100], n, i;
//     printf("Enter number of elements\n");
//     scanf("%d", &n);
//     for (i = 0; i < n; i++)
//     {
//         printf("\narr[%d]=",i);
//         scanf("%d", &arr[i]);
//     }
//     count_positive(arr, n);
//     return 0;
// }
// void count_positive(int arr[], int size)
// {
//     int i, c = 0;
//     for (i = 0; i < size; i++)
//     {
//         if (arr[i] > 0)
//         {
//             c++;
//         }
//     }
//     printf("Total number of positive integers is =%d\n", c);
// }
#include <stdio.h>
void count_positive(int *, int);
int main()
{
    int arr[100], n, i;
    printf("Enter number of elements\n");
    scanf("%d", &n);
    for (i = 0; i < n; i++)
    {
        printf("\narr[%d]=",i);
        scanf("%d", &arr[i]);
    }
    count_positive(arr, n);
    return 0;
}
void count_positive(int *arr, int size)
{
    int i, c = 0;
    for (i = 0; i < size; i++)
    {
        if (*(arr+i) > 0)
        {
            c++;
        }
    }
    printf("Total number of positive integers is =%d\n", c);
}