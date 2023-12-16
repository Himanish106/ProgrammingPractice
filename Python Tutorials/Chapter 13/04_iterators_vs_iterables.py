# iterators vs iterables

numbers = [1, 2, 3, 4]  # ---> Iterable. It can also be a tuple or a string
squares = map(lambda a: a**2, numbers)  # ---> Iterator

# To understand iterator vs iterables let us understand how for loop works

for i in numbers:
    print(i)

# Step 1: for loop at first calls a function called iter(). iter(numbers)----> As soon as the iter function is called it becomes an iterator
# Step 2: Now the question comes how the values are printed. So to print the values we use next function. next(iter(numbers)).

# Let us demonstrate this 2 steps
number_iter = iter(numbers)
print(next(number_iter))
print(next(number_iter))
print(next(number_iter))
print(next(number_iter))

# So in this way the above 2 steps works. iter function is applied on a iterable and thus converting it into a iterator. Loops have been created because every time we have to call the next function to print all the values that increases the line of code. 

print(iter(numbers)) #---> <list_iterator object at 0x000002469CD87880>. Notice properly:- it is coming list_iterator and not iterable. 

# Now if we talk about iterables
print(next(squares))
print(next(squares))
print(next(squares))
print(next(squares))

# So see here we do not need to call the iter function this time because map is already an iterator