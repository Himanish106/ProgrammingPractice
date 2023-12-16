#include<stdio.h>
int leap_year(int y);
int main()
{
    int year,chk_leap_year;
    printf("Enter year\n");
    scanf("%d",&year);
    chk_leap_year=leap_year(year);
    if(chk_leap_year==1)
    printf("%d is a leap year\n",year);
    else
    printf("%d is not a leap year\n",year);
    return 0;
}
int leap_year(int y)
{
    if((y%4==0)&&(y%100!=0)||(y%400==0))
    return 1;
    else
    return -1;
}