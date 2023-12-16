#include <stdio.h>
struct book
{
    char book_name[30];
    char author_name[30];
    float cost;
    int pages;
};
void show(struct book *);
int main()
{
    struct book b1;
    printf("Enter the name of the book\n");
    gets(b1.book_name);
    fflush(stdin);
    printf("Enter the author name\n");
    gets(b1.author_name);
    printf("Enter the cost of the book\n");
    scanf("%f", &b1.cost);
    printf("Enter the total number of pages\n");
    scanf("%d", &b1.pages);
    show(&b1);
    return 0;
}
void show(struct book *ptr)
{
    printf("%s %s %.2f %d", ptr->book_name, ptr->author_name, ptr->cost, ptr->pages);
}