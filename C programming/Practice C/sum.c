#include<stdio.h>
void sum(int a,int b);
void main(){
    int x,y;
    printf("Enter 2 numbers \n");
    scanf("%d %d",&x,&y);
    sum(x,y);
}
void sum(int a,int b)
{
    int sum;
    sum=a+b;
    printf("The sum of 2 number is=%d",sum);
}