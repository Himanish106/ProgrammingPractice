#include <stdio.h>
void printArray(int *A, int n)
{
    for (int i = 0; i < n; i++)
    {
        printf("%d ", A[i]);
    }
    printf("\n");
}
void bubbleSort(int *A, int n)
{
    int temp;
    int is_Sorted = 0;
    for (int i = 0; i < n - 1; i++) // For number of passes
    {
        printf("Working on pass number %d\n", i + 1);
        is_Sorted = 1;
        for (int j = 0; j < n - 1 - i; j++) // For number of comparisons
        {
            if (A[j] > A[j + 1])
            {
                temp = A[j + 1];
                A[j + 1] = A[j];
                A[j] = temp;
                is_Sorted=0;
            }
        }
        if (is_Sorted)
        {
            return;
        }
    }
}
int main()
{
    int A[] = {12, 54, 65, 7, 23, 9};
    // int A[] = {1, 2, 3, 4, 5, 6};
    int n = 6;
    printArray(A, n); // Printing the array before sorting
    bubbleSort(A, n); // Function to sort the array
    printArray(A, n); // Printing the array after sorting
    return 0;
}