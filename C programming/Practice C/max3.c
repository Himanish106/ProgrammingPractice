#include<stdio.h>
int max(int , int , int );
int main()
{
    int n1,n2,n3,maximum;
    printf("Enter 3 numbers \n");
    scanf("%d %d %d",&n1,&n2,&n3);
    maximum=max(n1,n2,n3);
    printf("The maximum among 3 numbers is %d",maximum);
    return 0;
}
int max(int a, int b, int c)
{
    if(a>b&&a>c)
    return a;
    else
    if(b>a&&b>c)
    return b;
    else
    return c;
}