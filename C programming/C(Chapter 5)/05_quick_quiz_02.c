#include<stdio.h>
#include<math.h>
int main(){
    int side;
    int area;
    printf("Enter Side \n");
    scanf("%d",&side);
    area=(pow((side),2));
    printf("The area of the square is %d",area);
    return 0;
}