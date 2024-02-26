package JavaPrac.Strings.StringsAndStringBuilderAndStringBuffer;
public class String01Concepts {
/*   So we all know that the reference is stored in the stack which points the data stored in the heap 
     
     What is a String Pool?
     
     String pool is a storage space in the Java heap memory where string literals are stored. It is also
    known as String Constant Pool or String Intern Pool. It is privately maintained by the Java String class.
    By default, the String pool is empty.
    
    Suppose we have 2 strings
      
     String a="Himanish";
     String b="Himanish";
      
     Now the question comes whether two different values will be created?
     
     The answer is no. Because in a String Pool values which are same are not recreated. So both the 
     references will point towards the same value.
    
     So now the question comes that if we modify the value of b then automatically the value of a will be
     affected because both are pointing to the same value which would have been a disadvantage. So to 
     solve this problem Strings has been made immutable. That means we cannot modify a String. If we 
     want any other value we have to create a new object.
    
    
    */
}
