#include<stdio.h>
char up_to_low(char c1)
{
char c2;
    while(c1>=65&&c1<=90)
    {
        c2=c1+32;
    return c2;
}
}
int main(){
    char c;
    printf("Enter character \n");
    scanf("%c",&c);
    printf("Upper cased letter is %c",up_to_low(c));
    return 0;
}