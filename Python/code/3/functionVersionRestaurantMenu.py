def print_menu(menu):
    for name, price in menu.items():   # for key & value (name & price) in the dictionaries items (.items() is a thing)
        print(name, ': $' , format(price, '.2f'), sep='')     # print puts a space between each world by default, sep= configures what that space can be instead
#   dict_name.keys()   to get a list of the keys
#   dict_name.values() to a get a list of values
#   dict_name.items() to get a list of items

# the dictionary {'Knackered Spam': 0.5, 'Pip pip Spam': 1.5, 'Squidgy Spam': 2.5, 'Smashing Spam': 3.5}

def get_order(menu):
    orders = []     # an empty list for orders
    order = input("What would you like to order? (Q to quit) ")  # whatever you order gets in the list

    while (order.upper() != 'Q'):    # as long as the most recent item in the list is NOT Q, loop on
        # find the order and add it to the list if it exists
        found = menu.get(order)    # from the menu_prices dictionary, get the input, we're checking if what's typed in is matching the menu items
        if found:                  # if the input (order's value) matched and gave True
            orders.append(order)    # add the order to the list/array  orders
        else:
            print("Menu item does not exist")

        #see if customer wants anything else
        order = input("anything else to order? (Q to quit)") # need to modify order to break out of the loop
    
    return orders   # return what the customer ordered in the orders list 
#   the menu is:
#Knackered Spam: $0.50
#Pip pip Spam: $1.50
#Squidgy Spam: $2.50
#Smashing Spam: $3.50

def bill_total (orders, menu):      # need a list of orders and menu to look up the price
    total = 0
    for order in orders:
        total = total + menu[order]   # in the menu dictionary, asking for the key gives the value
    return total
#


def main():
    menu = {'Knackered Spam': 0.5, 'Pip pip Spam': 1.5, 'Squidgy Spam': 2.5, 'Smashing Spam': 3.5}
    print_menu(menu)
    orders = get_order(menu)
    print("You ordered:", orders)
    print("Your total is", bill_total(orders, menu))

main()