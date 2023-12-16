// #include <stdio.h>
// #include <string.h>
// int main()
// {
//     char str[30];
//     int i, length, flag = 0;
//     printf("Enter the string\n");
//     gets(str);
//     length = strlen(str);
//     for (i = 0; i < length; i++)
//     {
//         if (str[i] != str[length - i - 1])
//             flag = 1;
//         break;
//     }
//     if (flag)
//         printf("%s is not palindrome", str);
//     else
//         printf("%s is palindrome", str);
//     return 0;
// }
#include <stdio.h>
#include <string.h>
int main()
{
    char str[30];
    int i, length, flag = 0;
    printf("Enter the string\n");
    gets(str);
    length = strlen(str);
    for (i = 0; i < length; i++)
    {
        if (str[i] != str[length - i -1])
            flag = 1;
        break;
    }
    if (flag)
        printf("%s is not palindrome", str);
    else
        printf("%s is palindrome", str);
    return 0;
}