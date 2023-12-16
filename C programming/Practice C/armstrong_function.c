#include <stdio.h>
#include <math.h>
int chk_armstrong(int n);
int main()
{
    int number, armstrong;
    printf("Enter number\n");
    scanf("%d", &number);
    armstrong = chk_armstrong(number);
    if (armstrong == 1)
        printf("%d is an armstrong number", number);
    else
        printf("%d is not an armstrong number", number);
    return 0;
}
int chk_armstrong(int n)
{
    int sum = 0, t1, t2, count = 0, remainder;
    t1 = n;
    while (t1 != 0)
    {
        t1 = t1 / 10;
        count++;
    }
    t2 = n;
    while (t2 != 0)
    {
        remainder = t2 % 10;
        sum = sum + pow(remainder, count);
        t2 = t2 / 10;
    }
    if (sum == n)
        return 1;
    else
        return 0;
}