# lamda expression is an expression which do not have any name but can be defined in one line
def add(a,b):
    return a+b

# If we write this same function using lamda expression
add2=lambda a,b:a+b
print(add2(2,3))

# Generally we do not assign like this in lamda functions. We use built in methods which we will be learning in upcoming chapters
# lamda expression is also called anonymous function. Let us prove this

print(add) #--> <function add at 0x000001DD152A04A0>----> So notice here we are getting the name of the function that is add
print(add2) #--> <function <lambda> at 0x00000234B6988D60> ---> So notice here we are not getting any name of the function. Keep in mind <lamda> is not a name of any function.