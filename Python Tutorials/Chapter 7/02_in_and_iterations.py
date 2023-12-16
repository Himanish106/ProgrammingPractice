# in keyword and iterations in dictionary

user_info = {
    'name': 'Himanish',
    'age': 20,
    'fav_movies': ['Red Notice', 'Article 15', 'Thursday'],
    'fav_tunes': ['Dream Note', 'Save Your Tears']
}

# 1) Check if key exists in Dictionary or not
if 'name' in user_info:
    print("Present")
else:
    print("Absent")

# 2) Check if value exists in Dictionary or not

# if 'Himanish' in user_info:
#     print("Present")
# else:
#     print("Absent")

# Here we will get the output as absent because even though 'Himanish' is present in the dictionary but 'in' keyword is used to only determine the keys in the dictionary and not the content of the dictionary

# So in order to do this we use values method
if 'Himanish' in user_info.values():
    print("Present")
else:
    print("Absent")  # Present
if ['Red Notice', 'Article 15', 'Thursday'] in user_info.values():
    print("Present")  # ---> Answer
else:
    print("Absent")


# 3) Loops in Dictionaries

for i in user_info:
    print(i)
# So here only the keys are printed and not the values
# So if we want to print the values
for i in user_info.values():
    print(i)  # ----> So all the values get printed here

# 4) values method

user_info_values = user_info.values()
print(user_info_values) # ---> dict_values(['Himanish', 20, ['Red Notice', 'Article 15', 'Thursday'], ['Dream Note', 'Save Your Tears']])
print(type(user_info_values))  # ----> <class 'dict_values'>

# 5) keys method

user_info_keys = user_info.keys()
print(user_info_keys) # ---> dict_keys(['name', 'age', 'fav_movies', 'fav_tunes'])
print(type(user_info_keys))  # ----> <class 'dict_keys'>

# 6) print values with the help of keys using loops
for i in user_info:
    print(user_info[i])

# 7) items method
user_items = user_info.items()
print(user_items) # ----> dict_items([('name', 'Himanish'), ('age', 20), ('fav_movies', ['Red Notice', 'Article 15', 'Thursday']), ('fav_tunes', ['Dream Note', 'Save Your Tears'])])
print(type(user_items))  # ---> <class 'dict_items'>

# 8) Using loops with the help of items method
for key, values in user_info.items():
    print(f"Key is {key} and items are {values}")

for key in user_info.items():
    print(key)