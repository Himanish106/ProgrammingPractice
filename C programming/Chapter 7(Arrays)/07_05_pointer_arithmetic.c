#include <stdio.h>

int main()
{
    int i = 34;
    int *ptr = &i; //<--- NOTE we can store the address of variable like this also. Only during initialization. Later part
    // of the program this is a wrong statement.
    printf("Value of i=%d\n",*ptr);
    printf("The value of ptr before increment is %u\n", ptr);
    ptr = ptr + 5;
    printf("The value of ptr after increment is %u\n", ptr);
    ptr = ptr - 20;
    printf("The value of ptr after decrement is %u\n", ptr);
    printf("Value of i=%d",*ptr);
    return 0;
}