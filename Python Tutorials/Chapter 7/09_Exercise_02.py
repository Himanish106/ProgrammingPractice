# users = {'name': 'Himanish',
#          'age': 21,
#          'fav_movies': ['coco', 'Avengers'],
#          'fav_songs': ['song1', 'song2']}

# Print this list as an user input from the user

users = {}
name = input("Please enter Your name:")
age = int(input("Please enter Your age:"))
fav_movies = input(
    "Please enter the list of your favourite movies:").split(",")
fav_songs = input("Please enter the list of favourite songs:").split(",")
users['name'] = name
users['age'] = age
users['fav_movies'] = fav_movies
users['fav_songs'] = fav_songs

for key, values in users.items():
    print(f"{key} :  {values},")
