#include <stdio.h>
#include <math.h>
int main()
{
    int c = 0, num, r, t1, t2, sum = 0;
    printf("Enter a number\n");
    scanf("%d", &num);
    t1 = num;
    while (t1 != 0)
    {
        t1 = t1 / 10;
        c++;
    }
    t2 = num;
    while (t2 != 0)
    {
        r = t2 % 10;
        sum = sum + pow(r, c);
        t2 = t2 / 10;
        c--;
    }
    if (sum == num)
        printf("%d is a disarium number", num);
    else
        printf("%d is not a disarium number", num);
    return 0;
}