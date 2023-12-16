#include <stdio.h>
int factorial(int x);
int main()
{
    int num, sum = 0, r, temp;
    printf("Enter number\n");
    scanf("%d", &num);
   temp=num;
    while (num != 0)
    {
        r = num % 10;
        sum = sum + factorial(r);
        num = num / 10;
    }
    if (sum == temp)
        printf("%d is krishnamurty number", temp);
    else
        printf("%d is not a krishnamurty number", temp);
    return 0;
}
int factorial(int x)
{
    if (x == 1 || x == 0)
        return 1;
    else
        return (x * factorial(x - 1));
}