#include<stdio.h>
#include<conio.h>
void main()
{
    int a,b;
    printf("enter the first number:");
    scanf("%d",&a);
     printf("enter the second number:");
    scanf("%d",&b);
    if(a>b)
    printf("%d is greater than %d",a,b);
    else
printf("%d is greater than %d",b,a);
getch();
}