// Write a program containing a function which reverses the array stored in it
// #include <stdio.h>
// void reverse_array(int *ptr, int size);
// int main()
// {
//     int arr[100], i, n;
//     printf("Enter size\n");
//     scanf("%d", &n);
//     for (i = 0; i < n; i++)
//     {
//         printf("arr[%d]= ", i);
//         scanf("%d", &arr[i]);
//     }
//     reverse_array(&arr[n - 1], n);
//     for (i = 0; i < n; i++)
//     {
//         printf("arr[%d]=%d\n", i, arr[n - i - 1]);
//     }
//     return 0;
// }
// void reverse_array(int *ptr, int size)
// {
//     int i;
//     for (i = 0; i < size; i++)
//     {
//         ptr = ptr - i;
//         // printf("arr[%d]=%d\n", i, *(ptr - i));
//     }
// }
// Another Logic
#include <stdio.h>
void reverse_array(int *ptr, int size);
int main()
{
    int arr[100], i, n;
    printf("Enter size\n");
    scanf("%d", &n);
    for (i = 0; i < n; i++)
    {
        printf("arr[%d]= ", i);
        scanf("%d", &arr[i]);
    }
    reverse_array(arr, n);
    for (i = 0; i < n; i++)
    {
        printf("arr[%d]=%d\n", i, arr[i]);
    }
    return 0;
}
void reverse_array(int *ptr, int size)
{
    int i, temp;
    for (i = 0; i < (size / 2); i++)
    {
        temp = ptr[i];
        ptr[i] = ptr[size - i - 1];
        ptr[size - i - 1] = temp;
        // printf("arr[%d]=%d\n", i, *(ptr - i));
    }
}