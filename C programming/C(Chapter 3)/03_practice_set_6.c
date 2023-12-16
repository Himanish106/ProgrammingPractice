#include<stdio.h>
int main()
{ 
    int a,b,c;
    printf("enter 3 numbers \n");
    scanf("%d %d %d",&a,&b,&c);
    if((a>b)&&(a>c))
    {
        printf("%d a is greatest \n ",a);
    }
    if((b>a)&&(b>c))
    {
        printf("%d b is greatest \n",b);
    }
    if((c>a)&&(c>b)) 
    {
        printf("%d c is greatest \n",c);
    }
    return 0;
}