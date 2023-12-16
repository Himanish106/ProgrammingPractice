# readfile
# open function
# read method
# seek method
# tell method
# readline method
# readlines method
# close method

# f=open('file1.txt','r') ----> open function basically returns an object. r means read. Basially there are many bots available but r is a default case so you may not mention r

f = open('file1.txt')
# print(f.read())
# print(f"The cursor position is {f.tell()}")
# print(f.read()) # ---> Once we perform read previously our cursor reaches to the end of the text in the text file. So when we perform read second time then our cursor had already reached the end of our text. So no more reading is possible.

# # To find the cursor position we can use tell method
# print(f.tell())
# # We can change the cursor position using seek method
# f.seek(0)
# print(f.read()) #---> So it reads again as we had set the position of the cursor to 0

# print(f.readline()) #---> Use to read one line at a time
# print(f.readline())
# lines=f.readlines() #---> Lists all the lines in a single list
# print(lines)
# print(len(lines)) #---> As we have 3 lines so we are getting 3. 
# for line in lines: #---> Printing individual lines
#     print(line,end="")

# To get the name of the file we can use a method called name bu remember it is not a method so no need to add parenthesis
print(f.name)

# To check whether the file is closed or not we can use closed method. Remember it is again not a function so no need to add parenthesis. It returns a boolean value
print(f.closed)
f.close()

f2=open(r'D:\Instagram Clone\file2.txt') #---> This is the process of reading the files in a different location. r is used because \ causes the problem. As \ is responsible for escape sequence so we had to use r to avoid this
print(f2.read())
f2.close()