#include <stdio.h>

int main()
{
    int m, n, p, q = 0;
    for (m = 2; m <= 3; m++)
    {
        for (n = 1; n <= m; n++)
            p = m + n - 1;
        if (p % 3 == 0)
            q = q + p;
        else
            q = q + p + 4;
    }
    printf("%d", q);
    return 0;
}