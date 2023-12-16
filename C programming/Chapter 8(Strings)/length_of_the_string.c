// Write a program to find the length of the string without using strlen function.
#include <stdio.h>
#include <string.h>
int main()
{
    int i, length;
    char s[50];
    printf("Enter a string\n");
    gets(s);
    i = 0;
    while (s[i] != '\0')
    {
        i++;
        length = i;
    }
    printf("The length of the string is = %d", length);
    return 0;
}
// Write a program to find the length of the string by using strlen function.
// #include <stdio.h>
// #include <string.h>
// int main()
// {
//     char s[50];
//     printf("Enter a string\n");
//     gets(s);
//     printf("%d", strlen(s));
//     return 0;
// }
// Write a program to find the length of the string without using strlen function and using a pointer.
// #include <stdio.h>

// int main()
// {
//     char arr[20];
//     char *ptr;
//     int count;
//     ptr = &*arr;
//     printf("Enter a string\n");
//     gets(arr);
//     count = 0;
//     // while (*ptr != '\0')
//     while(arr[count]!=0)
//     {
//         count++;
//         // ptr++;
//     }
//     printf("%d", count);
//     return 0;
// }