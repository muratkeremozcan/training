menus = [['Spam n Eggs', 'Spam n Jam', 'Spam n Ham'], ['SLT', 'PBJ'], ['Salad', 'Spaghetti', 'noodle soup'] ]
print('Breakfast menu is : \t', menus[0])
print('Lunch menu is : \t', menus[1])
print('Dinner menu is : \t', menus[2])

#get a specific item in a 2 dimentional array
print(menus[0][1])

# instead of the order in an array, you can know them by name if you use dictionary
menusDict = {'Breakfast':['Spam n Eggs', 'Spam n Jam', 'Spam n Ham'],
             'Lunch': ['SLT', 'PBJ'],
             'Dinner': ['Salad', 'Spaghetti', 'noodle soup']}

# print breakfast menu
print(menusDict['Breakfast'])
print(menusDict['Lunch'])