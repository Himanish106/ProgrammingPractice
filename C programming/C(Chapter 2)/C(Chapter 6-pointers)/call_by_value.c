#include <stdio.h>
int sum(int, int);
int main()
{
    int a = 4, b = 7;
    printf("The value of a=%d and b=%d before function call \n", a, b);
    printf("Sum of a and b is %d\n", sum(a, b));
    printf("The value of a=%d and b=%d after function call \n", a, b);
    return 0;
}
int sum(int a, int b)
{
    int c;
    c=a+b;
    a = 8755;
    b = 9876;
    return c;
}