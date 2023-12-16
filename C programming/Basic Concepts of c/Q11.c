#include<stdio.h>

int main(){
    int i,j;
   scanf("%d %d",&i,&j);
    i+=2;
    j-=2;
    if((i=5)&&(j=-3))
    printf("yes");
    else
    printf("no");
    return 0;
}