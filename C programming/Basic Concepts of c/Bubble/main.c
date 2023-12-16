#include<stdio.h>
int main()
{
    int i,j,is_sorted,arr[20],size,temp;
    printf("Enter size of the array\n");
    scanf("%d",&size);
    printf("Create an array\n");
    for(i=0; i<size; i++)
    {
        printf("arr[%d]=",i);
        scanf("%d",&arr[i]);
        printf("\n");
    }
    printf("Sort the array\n");
    for(i=0; i<size-1; i++)
    {
        is_sorted=1;
        printf("Working on pass number %d\n",i+1);
        for(j=0; j<size-1-i; j++)
        {

            if(arr[j]>arr[j+1])
        {
            temp=arr[j+1];
            arr[j+1]=arr[j];
            arr[j]=temp;
            is_sorted=0;
        }
    }
if(is_sorted)
{
    break;
}
    }
    for(i=0; i<size; i++)
    {
        printf("%d\t",arr[i]);
    }
    return 0;
}
