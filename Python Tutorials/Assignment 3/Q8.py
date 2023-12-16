# Get the number of new and old videos rented from the user
num_new_videos = int(input("Enter the number of new videos rented: "))
num_old_videos = int(input("Enter the number of old videos rented: "))

# Calculate the charges for the rented videos based on the given rental rates
new_video_charges = num_new_videos * 75
old_video_charges = num_old_videos * 50

# Calculate the total charges
total_charges = new_video_charges + old_video_charges

# Display the total charges to the user
print("Total Charges: $", total_charges)
