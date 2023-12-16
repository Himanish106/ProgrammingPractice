# w, a, r+ <---- There are different modes available to write in a file let us understand one by one that when to use it

# w---> write mode
with open('file1.txt', 'w') as f:
    # f.write('hello') #----> So now we see that it affects the original file. We had written some different text there but now it turned hello
    f.write('Hello Everyone how are you doing. Hope you are all fine and are all happy and healthy\nThe world is a tough place to live\nBut we have to fight till the end')

with open('file2.txt', 'w') as f1:
      f1.write("Hello People")   # ----> Even though no file called f2 was present there but w operation created a new file called f2 and wrote the required content there

# So we should be using w operation when we need to create a new file and write on it else we need to overwrite any other file

# a---> append mode
with open('file3.txt', 'a') as f2:
    f2.write("\nWe will meet again\n") #----> This gets append to the file

with open('file4.txt', 'a') as f3:
    f3.write("\nWe will meet again\n") #----> append also creates a new file

# r+ mode:- r+ mode cannot create a new file. It is used to both read and write in a file
with open('file5.txt','r+') as f4:
    # f4.write("This is a program") #---> There lies a problem with this as this overwrites the first part of the text in the file. But we can overcome this

    f4.seek(len(f4.read()))
    f4.write('\nuntil next time')