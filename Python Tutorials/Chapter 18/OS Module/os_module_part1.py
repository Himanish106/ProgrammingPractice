import os # ----> This is my os module it is used to program in such a way as we use an os .

# os.getcwd() ----> This gives us the current working directory
print(os.getcwd())

# We had learnt in linux that to create a directory or a folder we use mkdir. Here the case is also same
# os.mkdir('movies') # ----> But if we run it second time we will get an error as it already exists

# To check whether a diretory exists or not
print(os.path.exists('movies')) #--> True

# So this is the ideal process to create a directory:-
if os.path.exists('movies'):
    print('already exists')
else:
    os.mkdir('movies')

# So now let us learn how to create files
open('hello.txt','w').close()
# Suppose you want to create a folder in a different directory. There are 2 techniques to do so.
# 1st:
# os.mkdir(r'D:\Javascript\Day 1\movies')
# 2nd: 
# os.chdir(r'D:\Javascript\Day 1')
# print(os.getcwd()) #---> D:\Javascript\Day 1
# if os.path.exists('movie'):
#     print('already exists')
# else:
#     os.mkdir('movie')

# os.listdir() ---> List the directories in our folder
print(os.listdir())
# To list directories of different location
print(os.listdir(r'D:\Javascript\Day 1'))

# So here we were getting only the names of the files and folders. But if we want to get the name of files and folders along with their directory then we can do like this.

for item in os.listdir():
    path=os.path.join(os.getcwd(),item)
    print(path)

# If you want to do it in a different directory 
for item1 in os.listdir((r'D:\Javascript\Day 1')):
    print(os.path.join((r'D:\JavascriptDay 1'),item1))

# Else you can do the same by changing the directory