# So we have already read the work of get method. If the particular key is present the value is returned else None is returned
user_info = {
    'name': 'Himanish',
    'age': 20,
    'fav_movies': ['Red Notice', 'Article 15', 'Thursday'],
    'fav_tunes': ['Dream Note', 'Save Your Tears']
}
print(user_info.get('name'))  # ---> Himanish
print(user_info.get('names'))  # ----> None

# But if we want to return any other thing other than None for example: 'Not Found!' or 'Not Present' then we can write like this
print(user_info.get('names', 'NOT FOUND!'))  # ----> NOT FOUND!

user_info2 = {
    'name': 'Himanish',
    'age': 20, 'age': 30}
print(user_info2)  #----> {'name': 'Himanish', 'age': 30}

# So here we can see that the name of both the keys are same. When we run the program the preceeding age is overwritten by the succeeding age