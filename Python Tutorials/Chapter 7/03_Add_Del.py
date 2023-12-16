user_info = {
    'name': 'Himanish',
    'age': 20,
    'fav_movies': ['Red Notice', 'Article 15', 'Thursday'],
    'fav_tunes': ['Dream Note', 'Save Your Tears']
}

# 1) Add Data
user_info['fav_sports'] = ['cricket', 'football']
# ---> {'name': 'Himanish', 'age': 20, 'fav_movies': ['Red Notice', 'Article 15', 'Thursday'], 'fav_tunes': ['Dream Note', 'Save Your Tears'], 'fav_sports': ['cricket', 'football']}
print(user_info)

# 2) Pop Method
popped_item = user_info.pop('fav_tunes')
print(f"Popped item is {popped_item}") # ----> Popped item is ['Dream Note', 'Save Your Tears']
print(user_info) # ---> {'name': 'Himanish', 'age': 20, 'fav_movies': ['Red Notice', 'Article 15', 'Thursday'], 'fav_sports': ['cricket', 'football']}
print(type(popped_item)) # ---> <class 'list'>. Because a list is popped out so the data type of popped item is list. If an integer has been popped out then the data type would have been int.

# 3) popitem method --> Deletes any item from the dictionary randomly. This is the reason why we are not passing any arguments
popped_item2 = user_info.popitem()
print(popped_item2) 
print(user_info)
