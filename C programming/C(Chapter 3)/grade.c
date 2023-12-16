#include<stdio.h>
int main()
{
    int marks;
    printf("enter marks \n");
    scanf("%d",&marks);
    if(marks<40)
    {
        printf("FAILED");
    }
    else
    if(marks>=40&&marks<=60)
    {
        printf("2nd Division");
    }
    else
    if(marks>=60&&marks<=75)
    {
        printf("1st Division");
    }
    else
    if(marks>=75&&marks<=100)
    {
        printf("STAR");
    }
    else
    {
        printf("INVALID CHOICE");
    }
    return 0;
}