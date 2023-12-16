#include <stdio.h>
#include <string.h>
int main()
{
    char st1[] = "Himanish";
    char st2[] = "Himanish";
    int value = strcmp(st1, st2);
    printf("%d", value);
    return 0;
}
// Keep a note about this case
//  char st1[] = "Himanish ";
//     char st2[] = "Himanish";
// The output will be 1 as there is a white space in the first string.ASCII value of white space is 32.
// Since the last value of str2 is null so 32-0=32 which is a positive value.Hence output is 1.