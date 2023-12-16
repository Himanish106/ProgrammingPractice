#include<stdio.h>
float area_circle(float);
int main(){
    float area,radius;
    printf("Enter Radius \n");
    scanf("%f",&radius);
    area=area_circle(radius);
    printf("Area is =%f",area);
    return 0;
}
float area_circle(float r)
{
    float cir_area;
    cir_area=3.14*r*r;
    return cir_area;
}