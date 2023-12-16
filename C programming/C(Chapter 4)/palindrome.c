#include<stdio.h>
void main()
{
    int n,reversedNum=0,remainder,originalNum;
 
    printf("Enter a number\n");
    scanf("%d",&n);
 
    originalNum=n;
    //Reverse Logic
    while(n!=0)
    {
        remainder=n%10;
        reversedNum=reversedNum*10 + remainder;
        n=n/10;
    }
    if (originalNum==reversedNum)
    {
        printf("%d is a palindrome\n",originalNum);
    }
    else
    {
        printf("%d is not a palindrome\n",originalNum);
    }
}