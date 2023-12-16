#include<stdio.h>
int main()
{
    int n,c;
    printf("Enter rows & columns \n");
    scanf("%d %d",&n,&c);
    for(int i=1; i<=n; i++)
    {
        for(int j=1; j<=c; j++)
        {
            printf("*");
        }
        printf("\n");
    }
return 0;
}