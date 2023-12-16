# else and finally

while True:
    try:
        age = int(input("Enter age:"))
        # break ---> Its not a good practice to write extra statements in the try block. So it is always better to use the else block. Else block runs when the try block executes successfully.
    except ValueError:
        print("Maybe you have entered integer instead of string,try again")
    except:  # ---> Case if any other type of error occurs
        print("Unexpected error....")
    else:
        print(f"User input={age}")
        break
   
    finally: # ---> It is the block which will always execute whether error occurs or not. Keep in mind that the finally block executes before the break statement in else. This is because finally block will execute once at any cost. So if break would have occured then finally would not have worked
        print("finally blocks............")
