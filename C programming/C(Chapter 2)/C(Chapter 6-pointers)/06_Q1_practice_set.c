// Write a program to print the address of a variable. Use this address to get the value of the variable
#include <stdio.h>

int main()
{
    int a = 6;
    int *val;
    val = &a;
    printf("The address of a is %d\n", val);
    printf("The value of the variable a is %d\n", *val);
    return 0;
}