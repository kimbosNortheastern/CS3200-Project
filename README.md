# CS3200-Project

#Project: Reservation Hotel App
#Team: Database Design 44
#Member: Bo Sung Kim

##Description:
	The database is designed for hotel reservation app which can provide the reviews after using hotel (simply, think about hotels.com or expedia.com etc). The UML chart for the database is enclosed in the same zip file.
Problem Statement:
	I try to solve how to implement the relationships between multiple object and also many types of relationships through this assignment. For example, one to many, many to one and many to many. Implementing these examples with Java, MySql, and React to solve this problem.
##Solution Statement:
	Using Java to implementing the relationships. Studying how to use Java spring and how to use annotation properly to implementing the relationships. After this, show our data to other people (front end side) by using React. This react should cooperate with back end side. Get the information by Json format from Java spring and treat this data to show to users who use our apps on internet.
##User:
	I think there is only one type of user (customer) who consume our apps to reserve their hotel rooms. But in the further future, I think I can improve this app by adding one user type which is administer who can administer this app. I saw this aspect when people develop the website for shopping mall. They develop by thinking both side that customer and administer side.
##Domain Objects:
	The user wants to reserve the rooms in hotel and want to leave the review of their use. Therefore I should make review, hotel, room and reservation. When the user connects to website, they can see the customer list and if they click the customer, they will connect to customer editor. In this website they can crud the customer. In customer, they have grade such as Diamond, Gold and silver. If they click the customer grade side, then website navigate to the current customer’s customer grade editor. In editor there is link to go back to customer grade list and go back by history. The other area also has same navigation. If user click the specific attribute of object, it navigates to specific attribute editor and in editor there is link to go back to the list. 

##User Data Model:
	In user data model, we called customers who use this app. The customer database has the customer Id for primary key. In customers, it saves the individual information such as first name(string), last name(string), username(string), password(string), email(string), date of birth(date), and information for benefits depending on the customer grade such as customer grade(string) and mileage(int). The customer grade is foreign key from the database customer grade.
##Domain Object Data Model:
	My domain is travel but little bit different from an example given by professor. I don’t focus on flight, only focusing on the hotel reservation. Therefore, my domain object is hotels and reservations. There are reviews and rooms from hotel but the main two domain objects are hotels and reservations.

##Relationships:
User to domain object relationship:
	Customers and hotels relationship is many to many. Customers and reservations relationship is one to many. 
##Domain object to domain object relationship:
	Hotels and rooms relationship is composition and one to many. Rooms and reservations relationship is one to many. 
In addition, Customer grade and customers relationship is one to many. Reviews and customers relationship is many to one. Reviews and hotels relationship is many to one.

##Portable Enumeration:
	Room grade have 3 types which are standard, superior, and deluxe as the normal hotel room.
User Interface Requirements.
•	Customers List: Display a list of customers for this apps (Needs for administer)
•	Customers Editor: Customer can change their information themselves, or for administer side, need to change mileage and customer grade.
•	Reviews List: Display a list of reviews for the hotels to show the customer can see this
•	Reviews Editor: Users can CRUD the reviews
•	Hotels List: Display a list of hotels to reserve
•	Hotels Editor: Administer can CRUD the hotel information
•	Rooms List: Display a list of rooms by hotels to reserve
•	Rooms Editor: Administer can CRUD the rooms information
•	Reservation List: Display a list of reservation for users to check the reservation
•	Reservation Editor: Users can CRUD the reservation
•	Customer Grade List: Display a list of customer grade to show the information of benefit to users
•	Customer Grade Editor: Administer can CRUD the customer grade and bonus percentage
The first thing to do for user interface is making kind of login page. After that customer login, should show the list of hotel and if customer navigate the hotel, customer can see either reviews or rooms list to reserve. After reservation customer should see the reservation list to check their reservations. Each part, should navigate the editor page if customer click the specific part, to do CRUD if customer want. For example, if customer click the specific reservation in the reservation list, it should navigate to reservation editor page and provide CRUD for customers.

 
##TODO:
	I might need to think about the administer (another type of user) for this app who can enroll the hotel and rooms for customer. However, not sure I should think about administer side or not right now.
