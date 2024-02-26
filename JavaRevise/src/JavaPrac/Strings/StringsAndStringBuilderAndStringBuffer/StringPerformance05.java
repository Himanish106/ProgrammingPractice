/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package JavaPrac.Strings.StringsAndStringBuilderAndStringBuffer;

/**
 *
 * @author Himanish
 */
public class StringPerformance05 {
    public static void main(String[] args) {
        String series="";
        for(int i=0; i<26; i++){
            char ch=(char)('a'+i);
            series=series+ch;
        }
        System.out.println(series);
    }
}
/* This is not a good solution to do the program because each and everytime a new series is being created
   and then dereferenced leading to wastage of spaces. Like this a,ab,abc,abcd,abcde,abcdef.........
  abcdefghijklmnopqrstuvwxy. So basically there are so much iterations and most importantly wastage of
  spaces. Thus the performance of this particular code is not good.  

So it would had been very good if the strings could have been modified then so many derefenced or garbage
values would never had been created. So to solve this problem we have some another data type called
StringBuilder that will be solving our problem.
*/