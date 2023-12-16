#include <stdio.h>
int chk_perfect(int n);
int main()
{
    int number, perfect;
    printf("Enter number \n");
    scanf("%d", &number);
    perfect = chk_perfect(number);
    if (perfect == 1)
        printf("%d is a perfect number\n",number);
    else
        printf("%d is not a perfect number\n", number);
    return 0;
}
int chk_perfect(int n)
{
    int i, sum = 0, t;
    t = n;
    for (i = 1; i < t; i++)
    {
        if (t % i == 0)
            sum = sum + i;
    }
    if (n == sum)
        return 1;
    else
        return 0;
}