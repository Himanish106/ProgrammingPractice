#include <stdio.h>
void print_array(int *A, int n)
{
    for (int i = 0; i < n; i++)
    {
        printf("%d ", A[i]);
    }
    printf("\n");
}
void selection_sort(int *A, int n)
{
    printf("Running Selection Sort....\n");
    int index_of_min, temp;
    for (int i = 0; i < n - 1; i++)
    {
        index_of_min = i;
        for (int j = i + 1; j < n; j++)
        {
            if (A[j] < A[index_of_min])
            {
                index_of_min = j;
            }
        }
        temp = A[i];
        A[i] = A[index_of_min];
        A[index_of_min] = temp;
    }
}
int main()
{
    int A[] = {3, 5, 2, 13, 12};
    int n = 5;
    print_array(A, n);
    selection_sort(A, n);
    print_array(A, n);
    return 0;
}