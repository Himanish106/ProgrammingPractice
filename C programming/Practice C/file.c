#include<stdio.h>

int main(){
    int a=10,b,c,d,e;
    b=++a;
    c=a++;
    d=a;
    e=a++;
    printf("%d %d %d %d",b,c,d,e);
    return 0;
}