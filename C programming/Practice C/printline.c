#include<stdio.h>
void printline(void);
int main(){
    printline();
    printf("This illustrates the use of c functions");
    printline();
    return 0;
}
void printline(void)
{
    int i;
    for(i=1; i<=39; i++)
    printf("_");
    printf("\n"); 
}