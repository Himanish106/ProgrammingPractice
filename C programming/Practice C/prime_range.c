#include <stdio.h>
void prime_range(int a, int b);
int main()
{
    int a1, a2;
    printf("Enter 2 numbers\n");
    scanf("%d %d", &a1, &a2);
    prime_range(a1, a2);
    return 0;
}
void prime_range(int a, int b)
{
    int count, i;
    while (a <= b)
    {
        count = 0;
        for (i = 2; i <= a / 2; i++)
        {
            if (a % i == 0)
                count++;
            break;
        }
    }
    if (count == 0)
    {
        printf("%d\n", a);
        a++;
    }
}