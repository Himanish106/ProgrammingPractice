from tkinter import *
root = Tk()
root.geometry("444x233")
# To change the title of the window
root.title('GUI with Himanish')

# Attributes of Label: The Label widget is a standard Tkinter widget used to display a text or image on the screen.  There are a lot of attributes of the Label widget. Some important attributes are discussed below:

# 1) bg: The normal background color displayed behind the label and indicator.

# 2) fg: This option specifies the color of the text (foreground color). If you are displaying a bitmap, this is the color that will appear at the position of the 1-bits in the bitmap.

# 3) padx: Extra space added to the left and right of the text within the widget. Default is 1.

# 4) pady: Extra space added above and below the text within the widget. Default is 1.

# 5) relief: Specifies the appearance of a decorative border around the label. There are five types of reliefs, such that FLAT, RAISED, SUNKEN, GROOVE, RIDGE. The default is FLAT.

# 6) font: If you are displaying text in this label (with the text or textvariable option), the font option specifies the style, size, and other characteristics (i.e. bold, italic, etc.) of the font, and in this style, the text will be displayed.

# 7) text: To display one or more lines of text in a label widget, set this option to a string containing the text. Internal newlines (“\n”) will force a line break.

# 8) justify: Specifies how multiple lines of text will be aligned with respect to each other: LEFT for flush left, CENTER for centered (the default), or RIGHT for right-justified.

# 9) height: The vertical dimension of the new frame.

# 10) width: The horizontal dimension of the new frame. If this option is not set, the label will be sized to fit its contents.
root.mainloop()
