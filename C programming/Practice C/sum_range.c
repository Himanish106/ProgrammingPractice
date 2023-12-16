#include <stdio.h>

int main()
{
    int n, i = 1, sum = 0;
    printf("Enter end value\n");
    scanf("%d", &n);
    while (i <= n)
    {
        sum = sum + i;
        i++;
    }
    printf("The sum of first %d natural numbers is : %d", n, sum);
    return 0;
}