# def user_info(first_name, last_name, age):
#     print(f"Your first name is {first_name}")
#     print(f"Your last name is {last_name}")
#     print(f"Your age is {age}")


# user_info("Himanish", "Das", 20)

# Suppose if we do not pass the age argument it is obvious we will get an error. But if we write like this:-

# def user_info(first_name, last_name, age=24):
#     print(f"Your first name is {first_name}")
#     print(f"Your last name is {last_name}")
#     print(f"Your age is {age}")


# user_info("Himanish", "Das")

# So we don't get an error

# We can also pass a default value i.e None

# def user_info(first_name, last_name, age=None):
#     print(f"Your first name is {first_name}")
#     print(f"Your last name is {last_name}")
#     print(f"Your age is {age}")


# user_info("Himanish", "Das")
# So we will get an output none. Keep in mind None does'nt mean 0. It is just a default value. You can override the value anytime by passing another value as an argument to the parameter


# def user_info(first_name, last_name=None, age):
#     print(f"Your first name is {first_name}")
#     print(f"Your last name is {last_name}")
#     print(f"Your age is {age}")


# user_info("Himanish", "Das", 20) #----> Error

# Keep in mind this will give you an error as you can only make the last argument default else all te three arguments default. A default argument should never be followed by a non default argument