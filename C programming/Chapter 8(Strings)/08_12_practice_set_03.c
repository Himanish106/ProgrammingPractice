// This is original version of strlen using <string.h> function
//  #include <stdio.h>
//  #include <string.h>
//  int main()
//  {
//      char str[50];
//      printf("Enter your desired string to find its length\n");
//      gets(str);
//      printf("%d", strlen(str));
//      return 0;
//  }
//  Write your own version of strlen using <string.h> function
#include <stdio.h>
int strlen(char *st)
{
    char *ptr = st;
    int count = 0;
    while (*ptr != '\0')
    {
        count++;
        ptr++;
    }
    return count;
}
int main()
{
    char str[50];
    printf("Enter your desired string to find the length\n");
    gets(str);
    int length = strlen(str);
    printf("%d", length);
    return 0;
}