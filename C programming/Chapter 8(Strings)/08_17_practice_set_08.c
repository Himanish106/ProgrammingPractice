// Write a program to find the occurence of a given character of a string
#include <stdio.h>
int occurence(char st[], char c)
{
    char *ptr = st;
    int count = 0;
    while (*ptr != '\0')
    {
        if (*ptr == c)
        {
            count++;
        }
        ptr++;
    }
    return count;
}
int main()
{
    char str[30];
    char c;
    printf("Enter a String\n");
    gets(str);
    printf("Enter a character\n");
    scanf("%c", &c);
    int count = occurence(str, c);
    printf("Total Occurences=%d", count);
    return 0;
}