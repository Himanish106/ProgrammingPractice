// Write a program to encrypt a string by adding 1 to the ASCII value of its characters
#include <stdio.h>
void encrypt(char *c)
{
    char *ptr = c;
    while (*ptr != '\0')
    {
        *ptr = *ptr + 1;
        ptr++;
    }
}
int main()
{
    char c[30];
    printf("Enter the message\n");
    gets(c);
    encrypt(c);
    printf("Encrypted message is %s", c);
    return 0;
}