#include <stdio.h>

int main()
{
    //  char str[]={'H','i','m','a','n','i','s','h','\0'};
    char str[] = "Himanish";
    char *ptr = str;
    while (*ptr != '\0')
    {
        printf("%c", *ptr);
        ptr++;
    }
    return 0;
}