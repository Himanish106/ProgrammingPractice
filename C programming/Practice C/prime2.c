#include <stdio.h>

int main()
{
    int n, i, c = 0;
    printf("Enter n \n");
    scanf("%d", &n);
    for (i = 1; i <= n; i++)
    {
        if (n % i == 0)
        {
            c++;
        }
    }
    if (c == 2)
        printf("The number is prime");
    else
        printf("The number is not prime");
    return 0;
}