public class pr_Q6
{
    static int average(int ...arr)
    {
        int sum=0;
        int i;
        for (i=0; i<arr.length; i++)
        {
            sum=sum+arr[i];
        }
        return sum/i;
    }

    public static void main(String[] args) {
        int avg=average(5,6,3,8,2,9,9);
        System.out.println("The average is :"+avg);
    }
}
