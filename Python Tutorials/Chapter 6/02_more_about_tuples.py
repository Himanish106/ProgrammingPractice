# 1) Looping in tuples
mixed = (1, 2, 3, 4.0)
for i in mixed:
    print(i)
# NOTE: You can use while loop too

# 2) Tuple with one element
# Suppose if you have to create a tuple with one element 90% of the people will do like this
num1 = (1)
# But now if we are going to check its type then we will find that:-
print(type(num1))  # ----> <class 'int'>
# So in order to make it a tuple we need to add a "," after 1
num2 = (1,)
print(type(num2))  # ----> <class 'tuple'>

# 3) Tuple without Parenthesis
guitars = 'yamaha', 'baton rouge', 'taylor'
print(type(guitars))  # ----> <class 'tuple'>

# 4) Tuple Unpacking

guitarists = ('Maneli Jamal', 'Eddie Van Der Meer', 'Andrew Foy')
guitarists1, guitarists2, guitarists3 = (guitarists) # ----> The logic is no. of elements present in the lists is equal to the number of variables as each element needs a seperate variable to unpack.
print(guitarists1)  # ----> Maneli Jamal
# NOTE: If you do not give same number of variables as the number of elements in the tuple you will be getting an error

# 5) List inside tuples----> Though we cannot insert,delete or update elements in the tuple but within the list inside a tuple we can do all the following operations of a lists
favourites = ('southern mongolia', ['Tokyo Ghoul Theme', 'landscape'])
print(favourites)
# -----> We have to specify the index where the list is inside a tuple
favourites[1].pop()
print(favourites)
favourites[1].append("Sachin Tendulkar")
print(favourites)

# 6) Functions used inside a tuple- min(),max(),sum()
print(min(mixed))
print(max(mixed))
print(sum(mixed))