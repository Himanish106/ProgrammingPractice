# Update method- The update() method inserts the specified items to the dictionary.

# The specified items can be a dictionary, or an iterable object with key value pairs.
# 1) Case 1

user_info = {
    'name': 'Himanish',
    'age': 20,
    'fav_movies': ['Red Notice', 'Article 15', 'Thursday'],
    'fav_tunes': ['Dream Note', 'Save Your Tears']
}

more_info = {'State': 'West Bengal',
             'hobbies': ['Coding', 'Cricket', 'Carrom']}

# So in order to add this dictionary to user_info we will be using update method
user_info.update(more_info)
print(user_info) #---> {'name': 'Himanish', 'age': 20, 'fav_movies': ['Red Notice', 'Article 15', 'Thursday'], 'fav_tunes': ['Dream Note', 'Save Your Tears'], 'State': 'West Bengal', 'hobbies': ['Coding', 'Cricket', 'Carrom']}


# 2) Case 2

user_info2 = {
    'name': 'Himanish',
    'age': 20,
    'fav_movies': ['Red Notice', 'Article 15', 'Thursday'],
    'fav_tunes': ['Dream Note', 'Save Your Tears']
}

more_info2 = {'name': 'Harish', 'State': 'West Bengal',
              'hobbies': ['Coding', 'Cricket', 'Carrom']}
user_info2.update(more_info2)
print(user_info2) #---> {'name': 'Harish', 'age': 20, 'fav_movies': ['Red Notice', 'Article 15', 'Thursday'], 'fav_tunes': ['Dream Note', 'Save Your Tears'], 'State': 'West Bengal', 'hobbies': ['Coding', 'Cricket', 'Carrom']}

# So here since both have the keys with same name called 'name' so the value with the new key is inserted in the dictionary and the value of the old key is removed
