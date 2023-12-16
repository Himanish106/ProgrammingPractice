#include <stdio.h>

int main()
{
    int bits[32], stuffedBits[64];
    int i, j = 0, k, count, size;
    printf("Enter the size of the array:");
    scanf("%d", &size);
    for (i = 0; i < size; i++)
    {
        printf("Enter the %dth bit: ", i + 1);
        scanf("%d", &bits[i]);
    }
    for (i = 0; i < size; i++)
    {
        if (bits[i] == 1)
        {
            stuffedBits[j] = bits[i];
            count = 1;
            for (k = i + 1; k < size && bits[k] == 1 && count < 5; k++)
            {
                j++;
                stuffedBits[j] = bits[k];
                count++;
                if (count == 5)
                {
                    j++;
                    stuffedBits[j] = 0;
                }
                i = k;
            }
        }
        else
        {
            stuffedBits[j] = bits[i];
        }
        j++;
    }
    for (i = 0; i < j; i++)
    {
        printf("%d\t", stuffedBits[i]);
    }
    return 0;
}