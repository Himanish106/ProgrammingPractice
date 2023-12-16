#include<stdio.h>
int main(){
    int i=-1,k=3;
    k=(i++&&i++)? ++i:i++;
    printf("%d %d",i,k);
    return 0;
}