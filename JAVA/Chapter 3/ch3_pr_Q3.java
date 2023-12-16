/* Write a Java program to fill in a letter template which looks like below:
   letter= "Dear <|name|>, Thanks a lot"
   Replace <|name|> with a string (Some name)
*/
public class ch3_pr_Q3
{
    public static void main(String[] args) {
        String str="Dear Ravi Kumar, Thanks a lot";
        System.out.println(str);
        str=str.replace("Ravi Kumar","Himanish Das");
        System.out.println(str);
    }
}
