#include<stdio.h>
int fact(int);
int main()
{
    int n,r;
    float result;
    printf("Enter n and r \n");
    scanf("%d %d",&n,&r);
    result=(float)fact(n)/fact(r)*fact(n-r);
    printf("P(n/r)\n P(%d/%d)=%f",n,r,result);
    return 0;
}
int fact(int num)
{
    int i,f=1;
    for(i=1; i<=num; i++)
    f=f*i;
    return f;
}