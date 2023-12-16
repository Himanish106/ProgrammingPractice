#include <stdio.h>
#include <string.h>
int main()
{
    char st1[] = "Hello";
    char st2[] = "Himanish";
    strcat(st1, st2);
    printf("%s", st1);
    return 0;
}