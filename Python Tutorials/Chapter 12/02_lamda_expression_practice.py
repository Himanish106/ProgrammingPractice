# lamda expression practice
def is_even(a):
    return a % 2 == 0


print(is_even(3))

# If we implement the above using lamda expressions
odd_even=lambda a:a%2==0
print(odd_even(6))

# lamda with if else
func=lambda s:True if len(s)>5 else False
print(func('abcdefgh')) #---> True

# We can short the above function like this
func1=lambda s:len(s) > 5
print(func1('abcdefgh'))