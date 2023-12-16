#include <stdio.h>
#include <string.h>
#include <stdlib.h>
struct book
{
    int pages;
    float price;
    char name[40];
};
int main()
{
struct book b[100];
    for(int i=0; i<=1; i++)
    {
        printf("Enter name of the book\n");
        fflush(stdin);
        gets(b[i].name);
        printf("Enter the price and the total number of pages\n");
        scanf("%f %d",&b[i].price,&b[i].pages);
    }
    for (int i = 0; i <= 1; i++)
        printf("%s\n %.2f\n %d\n", b[i].name, b[i].price, b[i].pages);
    return 0;
}