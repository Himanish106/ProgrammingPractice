#include <stdio.h>
int chk_Prime(int n);
int main()
{
    int num, j;
    int flag = 0;
    printf("Enter number\n");
    scanf("%d", &num);
    for (j = 1; j <= num / 2; j++)
    {
        if (chk_Prime(j) == 1 && chk_Prime(num - j) == 1)
        {
            printf("%d can be expressed as sum of 2 numbers %d and %d\n", num, j, num - j);
            flag = 1;
        }
    }
    if (flag == 0)
        printf("Cannot be expressed");
    return 0;
}
int chk_Prime(int n)
{
    int i, c = 0;
    for (i = 1; i <= n; i++)
    {
        if (n % i == 0)
            c++;
    }
    if (c == 2)
        return 1;
    else
        return 0;
}