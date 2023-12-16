// WAP to implement Q5 using do while loops only.
#include<stdio.h>
int main()
{
    int i=1,sum=0;
    do{
        sum=sum+i;
        i++;    
    }
    while(i<=10);
     printf("The sum of first 10 natural numbers is=%d",sum);
    return 0;
}