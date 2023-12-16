#include <stdio.h>
#include <string.h>
int main()
{
    char target[30];
    char source[] = "Himanish Das";
    strcpy(target, source);
    printf("Now the target is %s", target);
    return 0;
}