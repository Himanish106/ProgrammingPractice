#include<stdio.h>
int power(int x,int y);
int main(){
    int base,index;
    printf("Enter base and index\n");
scanf("%d %d",&base,&index);
printf("The power of %d is %d",base,power(base,index));
    return 0;
}
int power(int x,int y)
{
    if(y==0)
    return 1;
    else
    return(x*power(x,y-1));
}