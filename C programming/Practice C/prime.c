#include <stdio.h>
int main()
{
    int a, b, i, count;
    printf("Enter start value \n");
    scanf("%d", &a);
    printf("enter end value \n");
    scanf("%d", &b);
    printf("Prime numbers between %d and %d are \n", a, b);
    while (a <= b)
    {
        count = 0;
        for (i = 2; i <= a / 2; i++)
        {
            if (a % i == 0)
            {
                count++;
                break;
            }
        }
        if (count == 0){
            printf("%d\n", a);
        }
        a++;
    }
    return 0;
}