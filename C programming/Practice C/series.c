#include<stdio.h>
#include<math.h>
int main()
{
    int n;
    float i,sum=0.0,a;
    printf("Enter n \n");
    scanf("%d",&n);
    for(i=1.0; i<=n; i++)
    {
    a=1/pow(i,2);
    sum=sum+a;
    }
    printf("The sum of series 1/1^2+1/2^2+...+1/n^2 is=%f",sum);
    return 0;
}