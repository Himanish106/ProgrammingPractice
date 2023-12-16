// Write a function slice() to slice a string.It should change the original string such that it is now the sliced string
// Take m and n as the starting and ending position for slice
#include <stdio.h>
void string_slice(char *str, int m, int n)
{
    int i = 0;
    while ((i + m) < n)
    {
        str[i] = str[i + m];
        i++;
    }
    str[i] = '\0';
}
int main()
{
    char st[50];
    int m, n;
    printf("Enter the string to be sliced\n");
    gets(st);
    printf("Enter the starting position\n");
    scanf("%d", &m);
    printf("Enter the ending position\n");
    scanf("%d", &n);
    string_slice(st, m, n);
    printf("%s", st);
    return 0;
}