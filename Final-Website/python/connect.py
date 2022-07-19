import mysql.connector

# Creating connection object
mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="3516"
)

# Printing the connection object
print(mydb)
