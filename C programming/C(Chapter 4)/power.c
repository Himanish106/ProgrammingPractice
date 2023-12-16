#include<stdio.h>
int main()
{
    int i,num,n;
    long int result=1;
    printf("enter the base value \n");
    scanf("%d",&num);
    printf("enter power value \n");
    scanf("%d",&n);
    for(i=1; i<=n; i++)
    {
        result=result*num;
    }
    printf("\n power(%d,%d)=%ld ,i=%d",num,n,result,i);
    return 0;
}