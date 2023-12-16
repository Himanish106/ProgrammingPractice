#include<stdio.h>
int power(int x,int y)
{
    int i,t=1;
    if(y==0)
    return 1;
    else
    if(y==1)
    return x;
    else
{
    for(i=1; i<=y; i++)
    t=t*x;
    return t;
}
}
int main(){
    int a,b,p;
    printf("Enter a & b \n");
    scanf("%d %d",&a,&b);
    p=power(a,b);
    printf("The power of %d is %d",a,p);
    return 0;
}