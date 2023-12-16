#include<stdio.h>

int main(){
    float x;
    printf("Enter x \n");
    scanf("%f",&x);
    printf("%f",x*x+2*x+1/2*x*x+x+1);
    return 0;
}