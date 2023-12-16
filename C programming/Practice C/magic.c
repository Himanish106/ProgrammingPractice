#include <stdio.h>

int main()
{
    int n, r1, t1, sum = 0, reverse = 0, t2, r2;
    printf("Enter a number\n");
    scanf("%d", &n);
    t1 = n;
    while (n != 0)
    {
        r1 = n % 10;
        sum = sum + r1;
        n = n / 10;
    }
    t2 = sum;
    while (sum != 0)
    {
        r2 = sum % 10;
        reverse = reverse * 10 + r2;
        sum = sum / 10;
    }
    if ((t2 * reverse) == t1)
        printf("%d is a magic number", t1);
    else
        printf("%d is not a magic number", t1);
    return 0;
}