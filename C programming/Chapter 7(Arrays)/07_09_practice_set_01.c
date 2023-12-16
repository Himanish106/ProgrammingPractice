// Create an array of 10 numbers.Verify using pointer arithmetic that (ptr+2) points to the 3rd element where ptr 
// is a pointer pointing to the first element in the array
#include <stdio.h>

int main()
{
    int arr[10], i, n;
    int *ptr;
    ptr = arr;
    ptr = ptr + 2;
    if (ptr == &arr[2])
        printf("These points to the same location in the memory\n");
    else
        printf("These does not point to the same location in the memory\n");
    return 0;
}