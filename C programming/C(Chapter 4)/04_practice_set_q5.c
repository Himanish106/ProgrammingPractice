// Write a program to print sum of first 10 natural numbers using while loop only
#include<stdio.h>
int main()
{
    int i=1,sum=0;
    while(i<=10)
    {
        sum=sum+i;
        i++;
    }
     printf("The sum is =%d \n",sum);
    return 0;
}