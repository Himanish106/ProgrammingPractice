#include<stdio.h>
int evenOdd(int);
int main()
{
    int num,chk_evenOdd;
    printf("Enter num \n");
    scanf("%d",&num);
    chk_evenOdd=evenOdd(num);
    if(chk_evenOdd==1)
    printf("The number is even %d",num);
    else
    printf("The number is odd %d",num);
    return 0;
}
int evenOdd(int a)
{
    if(a%2==0)
    return 1;
    else
    return 0;
}
