slang = ['Knackered', 'Pip pip', 'Squidgy', 'Smashing']
menu = []          # list/array
menu_prices = {}   # dictionary
price = 0.50       # initial value to use in menu_prices dictionary

for word in slang:    #for eaach slang word, concatonate spam on it, and print it out
    menu.append(word + ' Spam')

for item in menu:     # for each item in that above menu
    menu_prices[item] = price       # key = value /  item = price
    price = price + 1 # increment the price


for name, price in menu_prices.items():   # for key & value (name & price) in the dictionaries items (.items() is a thing)
    print(name, ': $' , format(price, '.2f'), sep='')     # print puts a space between each world by default, sep= configures what that space can be instead
                                                          # format the price to 2 decimal places
#   dict_name.keys()   to get a list of the keys
#   dict_name.values() to a get a list of values
#   dict_name.items() to get a list of items

orders = []     # an empty list for orders

while (True):    # run forever

     order = input("can I take your order? (Q to quit)") # need to modify order to break out of the loop

     if order == 'Cheeky Spam':
         print('Sorry, we are out of that!')
         continue   # stops the loop like break, but jumps back instead

     if (order.upper() == 'Q'):  #as long as the most recent item in the list is NOT Q, loop on
         break      # stops the loop and exit

     # find the order and add it to the list if it exists
     found = menu_prices.get(order)    # from the menu_prices dictionary, get the input, we're checking if what's typed in is matching the menu items
     if found:                  # if the input (order's value) matched and gave True
        orders.append(order)    # add the order to the list/array  orders
     else:
         print("Menu item does not exist")

    

print('you ordered', orders) #print the orders
