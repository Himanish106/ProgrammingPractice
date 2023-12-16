# Q) Why we use Dictionaries?
# --> Because of some limitations of list. Lists are not enough to represent real data

user = ['Himanish', 20, ['Red Notice', 'Save Your Tears'],
        ['awakening', 'cricket']]
# This list contains username user age,favourite movies,favourite songs etc. We can do this but this is not a good way to do so.


# Q- What are Dictionaries?
# ---> Unordered collection of data in key: value pair


# How to create Dictionaries
user1 = {'name': 'Harshit', 'age': 24}
print(user1)  # {'name': 'Harshit', 'age': 24}
print(type(user1))  # <class 'dict'>

# second method to create Dictionaries
user2 = dict(name='Himanish', age=20)
print(user2)  # ---> {'name': 'Himanish', 'age': 20}

# How to access data from dictionary?
# print(user2[0]) KeyError: 0

# NOTE: So note if we use indexing we will be getting an error called key error. Since indexing is not possible in dictionaries as dictionaries are unordered collection of items. So we need to use the concept of keys here. We will pass the keys as the index

print(user2['name'])  # --> Himanish
print(user2['age'])  # --> 20


# Which type of data dictionary can store?
# Anything

user_info = {
    'name': 'Himanish',
    'age': 20,
    'fav_movies': ['Red Notice', 'Article 15', 'Thursday'],
    'fav_tunes': ['Dream Note', 'Save Your Tears']
}
print(user_info)
print(user_info['fav_movies'])  # ---> ['Red Notice', 'Article 15', 'Thursday']

# How to add data to empty Dictionary??
user_info2 = {}
user_info2['name'] = 'Himanish'
user_info2['age'] = 24
print(user_info2)  # ---> {'name': 'Himanish', 'age': 24}
