#include <stdio.h>
int chk_relation(int, int);
int main()
{
    int x, y, result;
    printf("Enter x and y \n");
    scanf("%d %d", &x, &y);
    result = chk_relation(x, y);
    if (result == 0)
        printf("Equals");
    else if (result == 1)
        printf("\n x is greater than y");
    else
        printf("\n y is greater than x");
    return 0;
}
int chk_relation(int a, int b)
{
    if (a == b)
        return 0;
    else if (a > b)
        return 1;
    else
        return -1;
}