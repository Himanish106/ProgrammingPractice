# So if you remember sorted function was used in tuple or sets which were immutable. sorted has no effect on the original immutable data structure

guitars = [{'model': 'yamaha f310', 'price': 8400},
           {'model': 'faith naptune', 'price': 50000},
           {'model': 'faith apollo venus', 'price': 35000},
           {'model': 'taylor 814ce', 'price': 45000}]

# Sort the dictionary according to price
print(sorted(guitars, key=lambda d: d['price'])) #---> By default it is sorting in ascending order.
# To sort it in descending order
print(sorted(guitars, key=lambda d: d['price'],reverse=True))