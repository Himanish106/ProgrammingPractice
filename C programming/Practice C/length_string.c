#include <stdio.h>

int main()
{
    char str[30];
    int i, length;
    printf("Enter string\n");
    gets(str);
    i = 1;
    while (str[i] != '\0')
    {
        i++;
        length = i;
    }
    printf("%d", length);
    return 0;
}