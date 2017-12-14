import requests  # import the module so we can use it for requests, no need to reinvent the wheel!
# pip install requests,  do this in the terminal , in VScode go to View>Integrated Terminaal and type it in

my_request = requests.get('http://go.codeschool.com/spamvanmenu')  # call requests.get() with the URL
# an HTTP requet happens when you ask a web server for data   
# the server sends a data in JSON format , making it easier to read the menu

menu_list = my_request.json()   # get the response in JSON format
# JSON is a standard way to format and share data, often use to exchange data between a client and a web server 
# It uses a combination of lists/arrays and dictionaries, where the keys and values are all in strings


#print(menu_list) # just for output
# the output is from the serve ris
#[{'price': '3.00', 'name': 'Omelet', 'desc': 'Yummy'}, {'price': '5.75', 'name': 'Burrito', 'desc': 'Breakfast Burrito'}, {'price': '4.50', 'name': 'Waffles', 'desc': 'Belgian waffles with syrup'}]


# now that we have the list (which is in dictonary format, loop through it , call the keys to get the values
print("Today's menu is: ")
for item in menu_list:
    #unformatted version
    #print(item['name'], item['desc'], item['price'])
    
    print(item['name'], ': ', item['desc'].title(), ', $', item['price'], sep='')