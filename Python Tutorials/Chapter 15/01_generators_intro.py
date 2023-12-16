# Generators are iterators
# Generators are same as list i.e. it has a sequence. Only difference is list are iterable and generators are iterators. But now the question comes why we should be using Generators

# Suppose we have a list:-
# l=[1,4,9,16]
# So basically if we perform some operations using lists then ......
# Computer Memory:[...............................................] ---> What i want to denote is many number will come at the same time in the list then the memory usage gets higher and execution time also increases

# But in case of generators only 1 number will come at a single time and when the next number comes the previous numbers gets deleted
# Computer Memory:- (1),(4) ---> So one number is coming at a single time and when 4 comes 1 gets deleted. Does the memory consumption is less and execution time is faster

# So you would be using lists when you need to use your sequence more than once. While you use generators when you need to use your sequence for a single time