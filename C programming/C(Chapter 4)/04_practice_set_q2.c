#include<stdio.h>
int main()
{
    int limit,multiple;
    int n=10;
    printf("Enter Limit \n");
    scanf("%d",&limit);
    for(int i=limit; i>=0; i--)
    {
        multiple=n*i;
        printf("%d= %d * %d \n",multiple,n,i);
    }
    return 0;

}