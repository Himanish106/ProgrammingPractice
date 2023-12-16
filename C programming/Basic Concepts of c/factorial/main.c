#include <stdio.h>
int factorial(int x);
int main()
{
    int n, f;
    printf("Enter a number \n");
    scanf("%d", &n);
    f = factorial(n);
    printf("The factorial of %d is %d", n, f);
    return 0;
}
int factorial(int x)
{
    printf("Calling factorial %d\n", x);
    if (x == 0 || x == 1)
        return 1;
    else
        return (x * factorial(x - 1));
}
