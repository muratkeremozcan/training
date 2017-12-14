import orders # need to order the orders.py file in the same directory which has all the functions
# we also have to add orders. before each of the functions in the orders.py 

def main():
    menu = {'Knackered Spam': 0.5, 'Pip pip Spam': 1.5, 'Squidgy Spam': 2.5, 'Smashing Spam': 3.5}
    orders.print_menu(menu)
    order = orders.get_order(menu)
    print("You ordered:", order)
    print("Your total is", orders.total_bill(orders, menu))

main()