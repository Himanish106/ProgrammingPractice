// Write a program to check whether a given character is present in a string or not
#include <stdio.h>
void chk_present(char st[], char c)
{
    char *ptr = st;
    int present = 0;
    while (*ptr != 0)
    {
        if (*ptr == c)
        {
            present = 1;
            printf("%c is present in the string", c);
            break;
        }
        ptr++;
    }
    if (present == 0)
        printf("%c is not present in the string\n", c);
}
int main()
{
    char str[30];
    char c;
    printf("Enter a String\n");
    gets(str);
    printf("Enter a character\n");
    scanf("%c", &c);
    chk_present(str, c);
    return 0;
}