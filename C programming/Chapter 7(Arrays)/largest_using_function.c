#include <stdio.h>
int find_largest(int arr[], int n);
int main()
{
    int arr[100], i, n, max;
    printf("Enter range\n");
    scanf("%d", &n);
    for (i = 0; i < n; i++)
    {
        printf("arr[%d]= ", i);
        scanf("%d", &arr[i]);
    }
    max = find_largest(arr, n);
    printf("The maximum element in the array is %d", max);
    return 0;
}
int find_largest(int arr[], int n)
{
    int max = 0, i;
    for (i = 0; i < n; i++)
    {
        if (arr[i] > max)
        {
            max = arr[i];
        }
    }
    return max;
}