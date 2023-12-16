# try except

# Let us consider we have a code

# age = int(input("Enter age:"))
# if age > 18:
#     print("You can play this game.")
# else:
#     print("You cannot play this game.")

#  Now if we enter the age instead of 7 as "seven" we will be getting an error known as value error. So our job is to handle this error.

# We will be keeping that line in the try block where error will occur

# try:
#     age = int(input("Enter age:"))

# # If error occurs we will go to the except block

# # except:
# #     print("Unexpected error occurs...") ---> This is not a good practice as we are not mentioning the type of error that can occur here. Python will look into its huge class of exceptins and will find out what kind of errors is occuring thus makingour program slower. If we don't know what kind of error is occuring. Then it is fine.

# except ValueError:
#     print("Maybe you have entered integer instead of string")

# if age > 18:
#     print("You can play this game.")
# else:
#     print("You cannot play this game.")

# Now we would like to create the program in this way such that it takes user input as long as user does'nt input valid inputs

while True:
    try:
        age = int(input("Enter age:"))
        break
    except ValueError:
        print("Maybe you have entered integer instead of string,try again")
    except:  # ---> Case if any other type of error occurs
        print("Unexpected error....")

if age > 18:
    print("You can play this game.")
else:
    print("You cannot play this game.")
