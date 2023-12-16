# You already know about syntax error,indentation error,Index Error. So we are not discussing that

# 1) NameError
# print(name) NameError: name 'name' is not defined. Since name is not defined we are getting the name error. So basically name error comes when something we have mentioned in our program is not defined.

# 2) TypeError
# print(5 + 'Himanish') TypeError: unsupported operand type(s) for +: 'int' and 'str'
# print(5*'Himanish') ---> This is valid

# 3) ValueError

# s = '5'
# print(int(s)) ---> VALID as 5 can be converted to integer.

# s1 = 'abc'
# print(int(s1)) ValueError: invalid literal for int() with base 10: 'abc'. Since abc can never be an integer so here comes ValueError

# 4) AttributeError

# l=[1,2,3]
# l.push(4) AttributeError: 'list' object has no attribute 'push'. Since list has no attribute called push. So we are getting an error called attribut error

# 5) KeyError
d = {'name': 'Himanish'}
# print(d['age']) KeyError: 'age'. This is quite obvious as key 'age' is not present in our dictionary
