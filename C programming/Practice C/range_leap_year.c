#include <stdio.h>

int main()
{
    int min_year, max_year, year;
    printf("Enter minimum year and maximum year\n");
    scanf("%d %d",&min_year,&max_year);
       printf("List of leap years are\n");
    for (year = min_year; year <= max_year; year++)
    {
        if(year%4==0&&year%100!=0||year%400==0)
        printf("%d\n",year);
    }
        return 0;
}