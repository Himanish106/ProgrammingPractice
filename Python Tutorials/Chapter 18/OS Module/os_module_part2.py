import os
import shutil  # --> Things can be done which we cannot do with os module such as deleting a folder which has files and folders inside it

# os.chdir(r'D:\Javascript')
# print(os.listdir()) ['Day 1', 'Day 2'] ----> So we are getting a list that contains name of the folders Day1 and Day2. But this folders also contain files. So in order to get the names of files and folders within the folders we can use walk method

# Walk method gives 3 things at a time. current path,folder name,file name. walk method basically generates an iterator and we can use loop on it
fileiter = os.walk(r'D:\Javascript')
for current_path, folder_name, file_names in fileiter:
    print(f'current path:{current_path}')
    print(f'folder name:{folder_name}')
    print(f'file names {file_names}')

# You can create folders inside the folder using: os.makedirs
# os.makedirs('new/movies/hello')

# Deleting directories:
# os.rmdir():- Use to delete empty folders or directories
# os.rmdir('movies')
# shutil.rmtree('new') #---> Keep this in mind that this permanently deletes a folder. Not present in recycle bin

# If you want to copy a folder inside another folder
# shutil.copytree('div1','div/div1')
# In case of copying a file
# shutil.copy('file.txt', 'div1/ect.txt') #---> We can rename the file in this way
# To move a file:
# shutil.move('before_move.txt','move/after_move.txt')
# To move a whole folder and renaming it
shutil.move('move','div/moved')