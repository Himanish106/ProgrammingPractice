#include<stdio.h>

int main(){
    int marks[30],i;
    float sum=0,avg;
    for(i=0; i<30; i++)
    {
        printf("Enter array elements\n");
        printf("%d",&marks[i]);
    }
    for(i=0; i<30; i++)
    {
        sum=sum+marks[i];
    }
    avg=sum/30;
    printf("Average marks =%f",avg);
    return 0;
}