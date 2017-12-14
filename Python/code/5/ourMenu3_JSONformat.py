# here we have 2 dictionaries

first_item = {'name': 'Spam n Eggs', 
            'description': 'Two eggs with Spam', 
            'price':2.50 }

second_item = {'name': 'Spam n Jam', 
            'description': 'Biscout with Jam and Spam', 
            'price':3.50 }

# we can store these 2 dictionaries in an array
menu_items = [first_item, second_item]

#print the 1st list item in the array, call its keys to print their values

print(menu_items[0]['name'], menu_items[0]['price'], menu_items[0]['description'])
