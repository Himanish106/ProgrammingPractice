# This is a Challenge
# Define a function take any number of lists containing numbers
# [1,2,3] , [4,5,6] , [7,8,9]
# return average
# (1+4+7)/3, (2+5+8)/3, (3+6+9)/3

# try to make anonymous function in one line using lambda

def average(*args):

    return [sum(pair)/len(pair) for pair in zip(*args)]


print(average([1, 2, 3], [4, 5, 6], [7, 8, 9]))

# Using lambda functions:
avg_num = lambda *args: [sum(pair)/len(pair) for pair in zip(*args)]
print(avg_num([1, 2, 3], [4, 5, 6], [7, 8, 9]))
