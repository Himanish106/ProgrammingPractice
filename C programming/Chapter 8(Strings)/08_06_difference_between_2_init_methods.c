#include <stdio.h>

int main()
{
    // char *str = "This is Himanish";
    // char str[]="This is Himanish";
    //  str="Shubham Bhai"; This is wrong as Once a string is defined using [] it cannot be reinitialized to something else
    char *str = "This is Himanish";
    str = "Shubham Bhai"; // by Using a pointer we can reinitialize the string
    printf("%s", str);
    return 0;
}