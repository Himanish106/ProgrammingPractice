from tkinter import *
from PIL import Image, ImageTk #---> This is used for jpg images
root = Tk()

root.geometry('1255x654')
# photo = PhotoImage(file='10-giuseppe-torre.jpg') ---> For normal

# For jpg
image = Image.open("10-giuseppe-torre.jpg")
photo = ImageTk.PhotoImage(image)
label = Label(image=photo)
label.pack()
root.mainloop()
