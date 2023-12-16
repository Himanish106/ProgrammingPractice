// Try problem 3 using call by value and verify that it does not change the value of the said variable
#include <stdio.h>
void increase_value(int a)
{
    a = a * 10;
}
int main()
{
    int i = 4;
    printf("Value of i before changing is=%d and address of i=%u\n", i, &i);
    increase_value(i);
    printf("Value of i after changing is=%d and address of i=%u\n", i, &i);
    return 0;
}
//Try problem 3 using call by value and verify the value of the variable changes but the address of the variable does
// not change
// #include <stdio.h>
// int increase_value(int a)
// {
//     a = a * 10;
//     return a;
// }
// int main()
// {
//     int i = 4,c;
//     printf("Value of i before changing is=%d and address of i=%u\n", i, &i);
//    i= increase_value(i);
//     printf("Value of i after changing is=%d and address of i=%u\n", i, &i);
//     return 0;
// }