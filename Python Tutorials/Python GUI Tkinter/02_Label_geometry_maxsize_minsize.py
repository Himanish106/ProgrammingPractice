from tkinter import *
root = Tk()

# Syntax:- WidthxHeight
root.geometry('644x544') # --> But mentioning only this gives the initial view of the window as soon as the event loop starts. We can resize the window with the help of our mouse. But if we want to impose restrictions on the size and make it fixed then we can use the concept of max size and min size.

# Syntax:- Width,Height
root.minsize(300, 200) # ---> So upon using this method we can minimize the size of the tkinter window upto the mentioned limit
root.maxsize(1200, 900) # ---> So upon using this method we can maximize the size of the tkinter window upto the mentioned limit
label = Label(text='Welcome to the world of GUI')
label.pack()
root.mainloop()
