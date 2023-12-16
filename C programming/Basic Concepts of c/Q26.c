#include<stdio.h>

int main(){
    if(sizeof('a')==sizeof("abc"))
    printf("a");
    else
    printf("b");
    return 0;
}