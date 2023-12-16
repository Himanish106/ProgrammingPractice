#include <stdio.h>
void find_factorial(int, int *);
int main()
{
    int num, factorial;
    printf("Enter a number\n");
    scanf("%d", &num);
    find_factorial(num, &factorial);
    printf("The factorial of a number is=%d", factorial);
    return 0;
}
void find_factorial(int num, int *factorial)
{
    int i;
    *factorial = 1;
    for (i = 1; i <= num; i++)
    {
        *factorial = *factorial * i;
    }
}