#include <stdio.h>
struct book
{
    int pages;
    float cost;
    char name[30];
    char author_name[30];
};
int main()
{
    struct book b1 = {450, 900.50, "Let Us C", "YPK"};
    struct book *ptr;
    ptr = &b1;
    printf("%s %s %d %.2f\n", b1.name, b1.author_name, b1.pages, b1.cost);
    printf("%s %s %d %.2f", ptr->name, ptr->author_name, ptr->pages, ptr->cost);

    return 0;
}