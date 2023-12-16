#include <stdio.h>
#include <string.h>
void length(char arr[])
{
    int val = strlen(arr);
    printf("%d", val);
}
int main()
{
    char arr[20];
    printf("Enter name:");
    gets(arr);
    length(arr);
    return 0;
}