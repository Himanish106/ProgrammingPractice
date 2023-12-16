// #include <stdio.h>

// int main()
// {
//     int i;
//     int stud[4][2];
//     for (i = 0; i < 4; i++)
//     {
//         printf("Enter roll and marks\n");
//         scanf("%d %d", &stud[i][0], &stud[i][1]);
//     }
//     for (i = 0; i < 4; i++)
//         printf("%d %d\n", stud[i][0], stud[i][1]);
//     return 0;
// }
#include <stdio.h>

int main()
{
    int i;
    int stud[4][2] = {
        {1234, 56},
        {1212, 33},
        {1434, 80},
        {1312, 78}};

    for (i = 0; i < 4; i++)
        printf("%d %d\n", stud[i][0], stud[i][1]);
    return 0;
}