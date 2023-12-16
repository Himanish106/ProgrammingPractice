#include <stdio.h>
int chk_special(int);
int factorial(int);
int main()
{
    int num, check_special;
    printf("Enter a number\n");
    scanf("%d", &num);
    check_special = chk_special(num);
    if (check_special == 1)
        printf("%d is a special number\n", num);
    else
        printf("%d is not a special number\n", num);
    return 0;
}
int chk_special(int n)
{
    int r, t, sum = 0;
    t = n;
    while (n != 0)
    {
        r = n % 10;
        sum = sum + factorial(r);
        n = n / 10;
    }
        if (t == sum)
            return 1;
        else
            return 0;
}
int factorial(int x)
{
    if (x == 0 || x == 1)
        return 1;
    else
        return (x * factorial(x - 1));
}