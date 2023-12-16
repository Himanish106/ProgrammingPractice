#include<stdio.h>
int square(int a);
int main(){
    int area,side;
    printf("Enter side \n");
    scanf("%d",&side);
    area=square(side);;
    printf("%d",area);
    return 0;
}
int square(int a)
{
    int sq;
    sq=a*a;
    return sq;   
}