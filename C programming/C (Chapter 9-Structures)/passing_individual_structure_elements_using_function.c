#include <stdio.h>
void display(char *,char *,int);
 struct book
    {
        char name[25];
        char author[25];
        int price;
    };
int main()
{

    struct book b1 = {"Let Us C", "Yashwant Kanetkar", 300};
    display(b1.name, b1.author, b1.price);
    return 0;
}
void display(char *s, char *name, int cost)
{
    printf("%s %s %d", s, name, cost);
}