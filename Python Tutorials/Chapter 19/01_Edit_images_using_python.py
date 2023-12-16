import os
from PIL import Image, ImageEnhance, ImageFilter
# --> ImageEnhance module is imported to work with sharpness,brightness etc.
# --> ImageFilter module is imported to work with blurring images etc.

# 1) change the image extension

# img1=Image.open('download (3).jpg')
# img1.show() ---> Use to show the image
# img1.save('download (3).png')
# img1.save('download (3).pdf')
# img1.save('download (3).gif')

# If you have to convert many images of the same extension

# for item in os.listdir():
#     if item.endswith('.jpg'):
#         img1 = Image.open(item)
#         # filename, extension = item.split('.')
#         # else you can write like this

#         filename, extension = os.path.splitext(item)

# os.path.splitext() method in Python is used to split the path name into a pair root and ext. Here, ext stands for extension and has the extension portion of the specified path while root is everything except ext part. ext is empty if specified path does not have any extension. If the specified path has leading period (‘.’), it will be ignored.

# img1.save(f'{filename}.png')

# 2) resize image files
# img1=Image.open('download.jpg')
# max_size=(200,200)
# img1.thumbnail(max_size) #----> Image.thumbnail() Make this image into a thumbnail. This method modifies the image to contain a thumbnail version of itself, no larger than the given size.
# img1.save('resized download.jpg')

# 3) resize multiple images using for loop:- Same as you were converting extension

# 4) Sharpness
# img1=Image.open('download (3).jpg')
# enhancer=ImageEnhance.Sharpness(img1)
# # enhancer.enhance(0).save('download 3 edited.jpg')
# enhancer.enhance(10).save('download 3 edited.jpg')
# 0: blurry
# 1: Original image
# 2: Image with increased sharpness and thereafter as the value inreases the sharpness increases

# 5) Brightess
# img1 = Image.open('download (1).jpg')
# enhancer = ImageEnhance.Brightness(img1)
# # ---> Not only in this case you can pass decimal values everywhere
# enhancer.enhance(1.2).save('download (1) edited.jpg')

# 0: black
# 1: Original image
# 2: Image with increased brightness and thereafter as the value inreases the brightness increases

# 6) Color
# img1=Image.open('download.jpg')
# enhancer=ImageEnhance.Color(img1)
# enhancer.enhance(2).save('download edited.jpg')

# 0: black and white
# 1: Original image
# 2: Image with increased color and thereafter as the value inreases the color increases

# 7) Contrast
# img1=Image.open('download (3).jpg')
# enhancer=ImageEnhance.Contrast(img1)
# enhancer.enhance(1.5).save('download 3 contrast edited.jpg')

# 0: Gray screen
# 1: Original image
# 2: Image with increased contrast and thereafter as the value inreases the contrast increases

# 8) Image blur , GaussianBlur
# img1 = Image.open('download edited.jpg')
# img1.filter(ImageFilter.GaussianBlur(
#     radius=2)).save('download edited blur.jpg')

# By default the radius is 2
