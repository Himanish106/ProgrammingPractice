// WAP to store a value to an integer variable and change the address of the value by incrementing the address by 5 and
// decrementing the address by 10 again. Each time display the new addresses and finally store a new value to the
// new address.
#include <stdio.h>

int main()
{
    int i = 87;
    int *pointer = &i;
    printf("Value of i=%d\n", *pointer);
    printf("Address of i now=%u\n", pointer);
    pointer = pointer + 5;
    printf("Address now after incrementing by 5=%u\n", pointer);
    pointer = pointer - 10;
    printf("Address now after decrementing by 10=%u\n", pointer);
    int x = 43;
    pointer = &x;
    printf("Value at new address =%d\n", *pointer);
    return 0;
}