// #include <stdio.h>
// void printarray(int *ptr, int n)
// {
//     int i;
//     for (i = 0; i < n; i++)
//         printf("arr[%d]=%u\n", i, *(ptr + i));
// }
// int main()
// {
//     int arr[] = {100, 257, 126, 33, 87, 63, 97};
//     printarray(arr, 7);
//     return 0;
// }
//
#include <stdio.h>
void printarray(int ptr[], int n)
{
    int i;
    for (i = 0; i < n; i++)
    {
        ptr[2] = 5545;
        printf("arr[%d]=%d at %u\n", i, ptr[i], (ptr + i));
    }
    // ptr[2]=5545;
}
int main()
{
    int arr[] = {100, 257, 126, 33, 87, 63, 97};
    printarray(arr, 7);
    // printf("%d",arr[2]);
    return 0;
}
// #include <stdio.h>
// void printarray(int *ptr2, int size);
// int main()
// {
//     int arr[100], i, n;
//     int *ptr;
//     printf("Enter range\n");
//     scanf("%d", &n);
//     for (i = 0; i < n; i++)
//     {
//         ptr = &arr[i];
//         printf("arr[%d]= ", i);
//         scanf("%d", ptr);
//         printf("%u\n", ptr);
//     }
//     printarray(arr, n);
//     return 0;
// }
// void printarray(int *ptr2, int size)
// {
//     int i;
//     for (i = 0; i < size; i++)
//         printf("arr[%d]=%d at address %u\n", i, *(ptr2 + i), (ptr2 + i));
// }