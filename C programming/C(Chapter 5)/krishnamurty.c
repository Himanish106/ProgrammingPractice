#include <stdio.h>
int factorial(int x);
int main()
{
    int num, original_num, r, sum = 0;
    printf("Enter num \n");
    scanf("%d", &num);
    original_num = num;
    while (num != 0)
    {
        r = num % 10;
        sum = sum + factorial(r);
        num = num / 10;
    }
    if (original_num == sum)
        printf("%d is a krishnamurty number", original_num);
    else
        printf("%d is not a krishnamurty number", original_num);
    return 0;
}
int factorial(int x)
{
    if (x == 1 || x == 0)
        return 1;
    else
        return (x * factorial(x - 1));
}