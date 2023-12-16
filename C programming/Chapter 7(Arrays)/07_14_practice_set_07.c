#include <stdio.h>
void multiplication_2(int n2, int *arr, int num)
{
    int i, j;
    for (i = 0; i < 1; i++)
    {
        for (j = 0; j < n2; j++)
        {
            arr[i] = num * (j + 1);
            printf("arr[%d][%d]=%d\n", i, j, arr[i]);
        }
    }
}
void multiplication_7(int n2, int (*arr)[10], int num)
{
    int i, j;
    for (i = 1; i < 2; i++)
    {
        for (j = 0; j < n2; j++)
        {
            arr[i][j] = num * (j + 1);
            printf("arr[%d][%d]=%d\n", i, j, arr[i][j]);
        }
    }
}
void multiplication_9(int n2, int (*arr)[10], int num)
{
    int i, j;
    for (i = 2; i < 3; i++)
    {
        for (j = 0; j < n2; j++)
        {
            arr[i][j] = num * (j + 1);
            printf("arr[%d][%d]=%d\n", i, j, arr[i][j]);
        }
    }
}
int main()
{
    int arr[3][10];
    int n1 = 3;
    int n2 = 10;
    multiplication_2(n2, &arr[0][0], 2);
    multiplication_7(n2, &arr[1], 7);
    multiplication_9(n2, &arr[2], 9);
    return 0;
}
// #include <stdio.h>
// void multiplication(int n2, int *arr, int num)
// {
//     int i, j;
//     for (i = 0; i < n2; i++)
//     {
//         arr[i] = num * (i + 1);
//         printf("%dx%d=%d\n", num, i + 1, arr[i]);
//     }
// }
// int main()
// {
//     int arr[3][10];
//     int n1 = 3;
//     int n2 = 10;
//     multiplication(n2, &arr[0][0], 2);
//     multiplication(n2, arr[1], 7);
//     multiplication(n2, arr[2], 9);
//     return 0;
// }
