# Write e function that accepts an integer between 1 to 12 to represent the months number
# and display the corresponding month of the year(For example if  month = 1 the display
# JANUARY)

def months(i):
    month = {1: "JANUARY", 2: "FEBRUARY", 3: "MARCH", 4: "APRIL", 5: "MAY", 6: "JUNE",
             7: "JULY", 8: "AUGUST", 9: "SEPTEMBER", 10: "OCTOBER", 11: "NOVEMBER", 12: "DECEMBER"}
    return month[i]


month = int(input("Enter month:"))
print(f"Month {month} is {months(month)}")
