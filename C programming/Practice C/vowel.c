#include<stdio.h>

int main(){
    char ch;
    printf("Enter character \n");
    scanf("%c",&ch);
    if(ch=='A'||ch=='E'||ch=='I'||ch=='O'||ch=='U'||ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u')
    printf("The character %c is vowel",ch);
    else
    printf("%c is not a vowel",ch);
    return 0;
}