#include <stdio.h>

int main()
{
    int bits[32], unstuffedBits[64];
    int i, j = 0, k, count, size;
    printf("Enter the size of the array:");
    scanf("%d", &size);
    for (i = 0; i < size; i++)
    {
        printf("Enter the %dth bit:", i + 1);
        scanf("%d", &bits[i]);
    }
    for (i = 0; i < size; i++)
    {
        if (bits[i] == 1)
        {
            unstuffedBits[j] = bits[i];
            count = 1;
            for (k = i + 1; k < size && count < 5 && bits[k] == 1; k++)
            {
                j++;
                unstuffedBits[j] = bits[k];
                count++;
                if (count == 5)
                {
                    k++;
                }
                i = k;
            }
        }
        else
        {
            unstuffedBits[j] = bits[i];
        }
        j++;
    }
    for (i = 0; i < j; i++)
    {
        printf("%d\t", unstuffedBits[i]);
    }
    return 0;
}