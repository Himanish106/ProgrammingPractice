#include<stdio.h>
void chk_relation(int,int);
int main(){
    int n1,n2;
    printf("Enter numbers n1 and n2 \n");
    scanf("%d %d",&n1,&n2);
    chk_relation(n1,n2);
    return 0;
}
void chk_relation(int a,int b)
{
    if(a==b)
    printf("\nBoth are equal");
    else if(a>b)
    printf("\n a is greater than b");
    else
    printf("\n b is greater than a");
}