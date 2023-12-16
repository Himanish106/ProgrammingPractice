#include <stdio.h>
struct book
{
    char name[25];
    char author[25];
    int price;
};
void display(struct book);
int main()
{

    struct book b1 = {"Let Us C", "Yashwant Kanetkar", 300};
    display(b1);
    return 0;
}
void display(struct book b)
{
    printf("%s %s %d", b.author, b.name, b.price);
}