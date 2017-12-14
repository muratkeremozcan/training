# 'w' for mode which is write
# 'r' for read, 'a' for append
# open file in write mode
sales_log = open('spam_orders.txt', 'w')   
sales_log.write('The Spam Van\n') #writing to a file, \n for new line
sales_log.write('Sales Log')
sales_log.close()               #close file