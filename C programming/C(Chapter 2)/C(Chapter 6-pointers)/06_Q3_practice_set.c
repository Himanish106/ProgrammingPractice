// Write a program to change the value of a variable to ten times of its current value. Write a function and pass the
// value by address
#include <stdio.h>
void increase_value(int *a)
{
    *a = *a * 10;
}
int main()
{
    int i = 4;
    printf("Value of i before changing is=%d and address of i=%u\n", i, &i);
    increase_value(&i);
    printf("Value of i after changing is=%d and address of i=%u\n", i, &i);
    return 0;
}