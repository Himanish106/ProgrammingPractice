// Write a program having a variable i.Print the address of i. Pass this variable to a function and print its address.
// Are these addresses same and why?
#include <stdio.h>
void verify_address(int a)
{
    printf("The address of variable a is %u\n", &a);
}
int main()
{
    int i = 4;
    printf("The value of variable i is %d\n", i);
    verify_address(i);
    printf("The address of i is %u\n", &i);
    return 0;
}