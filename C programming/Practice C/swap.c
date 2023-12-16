#include<stdio.h>
void swapcv(int x,int y);
int main(){
    int a,b;
    printf("Enter a and b\n");
    scanf("%d %d",&a,&b);
    swapcv(a,b);
    printf("a=%d,b=%d \n",a,b);
    return 0;
}
void swapcv(int x,int y)
{
    int t;
    t=x;
    x=y;
    y=t;
    printf("After swapping x=%d,y=%d \n",x,y);
}