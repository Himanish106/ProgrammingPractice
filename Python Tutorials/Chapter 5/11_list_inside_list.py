# -----> Actually this list contains 3 items i.e. 3 different lists
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]  # --->2-D lists
print(matrix[2])  # -----> Prints the list at the 2nd index i.e. [7,8,9]

# So now we can use for loop to print the whole list
for i in matrix:
    print(i)  # -----> This prints the list inside the list

# Now if we want to print the individual elements of the lists
for sublist in matrix:
    for j in sublist:
        print(j)  # -----> So this prints all the individual elements of the lists

print("\n")
# Now if we want to access an individual element of the lists then For example say 5
print(matrix[1][1])

# You can find the data type using the type function
s="Himanish"
print(type(s)) #----> <class 'str'>
print(type(matrix)) #---> <class 'list'>