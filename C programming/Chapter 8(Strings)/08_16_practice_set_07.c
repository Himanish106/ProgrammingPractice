// Write a program to decrypt the string encrypted using encrypt function in problem 6
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
void decrypt(char *c)
{
    char *ptr = c;
    while (*ptr != '\0')
    {
        *ptr = *ptr - 1;
        ptr++;
    }
}
int main()
{
    char c[30];
    printf("Enter the message\n");
    gets(c);
    encrypt(c);
    printf("Encrypted message is %s\n", c);
    decrypt(c);
    printf("Decrypted message is %s\n");
    return 0;
}