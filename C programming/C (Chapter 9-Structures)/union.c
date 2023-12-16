#include<stdio.h>
#include<string.h>
 union id{
        char manuf[20];
        int size;
        char colour;
        float cost;
    }shirt;
int main(){
    printf("\n The size of the union is %d",sizeof(shirt));
   strcpy(shirt.manuf,"Pantaloons");
   shirt.size=44;
   shirt.colour='R';
   shirt.cost=375.00;
   printf("\n %s %d %c %.2f",shirt.manuf,shirt.size,shirt.colour,shirt.cost);
shirt.colour='B';
shirt.size=40;
shirt.cost=500.00;
  printf("\n %s %d %c %.2f",shirt.manuf,shirt.size,shirt.colour,shirt.cost);
    return 0;
}