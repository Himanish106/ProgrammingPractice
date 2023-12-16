#include<stdio.h>
int main(){
    int a,b,c;
    printf("enter a,b\n");
    scanf("%d %d",&a,&b);
    c=a;
    a=b;
    b=c;
    printf("Number after swapping a=%d,b=%d",a,b);
    return 0;
}