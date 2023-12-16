#include <stdio.h>
#include <stdlib.h>

int main()
{
    int i,n;
    int *arr;
    printf("Enter the size of elements you want to store\n");
    scanf("%d",&n);
    arr=(int *)malloc(n*sizeof(int));
    if(arr==NULL)
    {
        printf("Memory allocation failed\n");
        exit(0);
    }
    for(i=0; i<n; i++)
    {
        printf("arr[%d]=",i);
        scanf("%d",&arr[i]);
        printf("\n");
    }
    printf("The array contains\n");
    for(i=0; i<n; i++)
    {
        printf("%d",*(arr+i));
        printf("\n");
    }
    return 0;
}
