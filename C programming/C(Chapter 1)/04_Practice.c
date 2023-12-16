#include <stdio.h>
int main()
{
    int principal,rate,time,Simple_Interest;
printf("Enter Principal amount \n");
scanf("%d",&principal);
printf("Enter Rate \n");
scanf("%d",&rate);
printf("Enter Time \n");
scanf("%d",&time);
Simple_Interest=(principal*rate*time)/100;
printf("The Simple Interest is %d \n",Simple_Interest);
}