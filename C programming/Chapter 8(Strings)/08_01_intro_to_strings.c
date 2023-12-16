#include <stdio.h>

int main()
{
    char str[] = {'H', 'i', 'm', 'a', 'n', 'i', 's', 'h', '\0'};
    // char str[]="Himanish";
    for (int i = 0; i < 8; i++)
    {
        printf("%c", str[i]);
    }
    return 0;
}