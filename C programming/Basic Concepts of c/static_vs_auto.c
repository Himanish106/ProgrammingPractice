#include <stdio.h>
int increment();
int main()
{
    for (int i = 1; i <= 5; i++)
        increment();
    return 0;
}
int increment()
{
    // static int i=0;
    auto int i = 0;
    printf("%d\n", i);
    i++;
}
