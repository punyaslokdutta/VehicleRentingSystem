# Vehicle Renting System
New vehicle rental service called KarSvc

### Assignment Details: 

Description:
We are starting a new vehicle rental service called KarSvc. In this service, we will rent different kinds of vehicles such as cars and bikes.
<img width="1429" alt="Screenshot 2023-12-27 at 4 13 53 PM" src="https://github.com/punyaslokdutta/VehicleRentingSystem/assets/13198518/ec9e5290-e734-45b9-afc1-37aa0c9b5f4e">
<img width="1417" alt="Screenshot 2023-12-27 at 4 13 02 PM" src="https://github.com/punyaslokdutta/VehicleRentingSystem/assets/13198518/b1c1f8f1-6cb5-42cb-af54-95e4e1036413">
<img width="631" alt="Screenshot 2023-12-27 at 4 13 35 PM" src="https://github.com/punyaslokdutta/VehicleRentingSystem/assets/13198518/2d1dca8c-3004-47cf-a293-014365452e50">


UI Figma Link: https://www.figma.com/proto/wU6iDQ7a0qSTjjQ59YBTZb/Vehicle-rental?page-id=0%3A1&type=design&node-id=3-373&viewport=507%2C542%2C0.27&t=5fbJFLTRJA9k1hqL-1&scaling=min-zoom	

### Features:
Rental service has multiple branches throughout the city.
Each branch has a limited number of different kinds of vehicles. 
Each vehicle can be booked with a predefined price per unit time slot. For simplicity, the current pricing model does not support dynamic pricing or update on prices based on seasonality.
Each vehicle can be booked in multiples of 1 hour time slot.
All bookings should be made before the start time of particular booking.

### Requirements:
Onboard a new branch with available vehicles.
Onboard new vehicle(s) of existing type to a particular branch.
Rent vehicle for a time slot and a vehicle type (lowest price as the default choice of selection of vehicle, this should be extendable to any other strategy). While booking a vehicle if availability is not there, then it should fallback to another available branch, which is derived based on the vehicle selection strategy.
A system view should be made available, such as currently blocked vehicles, available vehicles of all the branches.

Bonus:
While booking a vehicle, if 2 branches are providing a vehicle at the same price, give priority to the nearest branch.

### Other Notes:
Use any database or NoSQL store of your preference
Design and build a simple UI for the application. ( usability is key, do not worry about beautification.
Please prioritize code compilation, execution and completion. 
Work on the expected output first and then add good-to-have features of your own.

Expectations:
Make sure that you have working and demonstrable code.
Make sure that code is functionally correct.
Add all the implicit capabilities such as Login, debuggability etc., 
Make sure concurrent requests are handled appropriately.
Code should be modular and readable.
Separation of concern should be addressed.
Code should easily accommodate new requirements with minimal changes.
Code should be easily testable.


### Test cases: 
(Test-cases are defined for understanding feature requirements only. Please model it appropriately based on your service implementation)
add_branch(‘koramangala’, [“1 suv for Rs.12 per hour”, “3 sedan for Rs.10 per hour”, “3 bikes for Rs.20 per hour”]); 
add_branch(‘jayanagar’, [“3 sedan for Rs.11 per hour”, “3 bikes for Rs.30 per hour”, “4 hatchback for Rs.8 per hour”]);
add_branch(‘malleshwaram’, [“1 suv for Rs.11 per hour”, “10 bikes for Rs.3 per hour” , “3 sedan for Rs.10 per hour”]);
add_vehicle(‘koramangala’,  “1 sedan”); //add 1 sedan to koramangala
rent_vehicle(‘suv’, 20th Feb 10:00 PM, 20th Feb 12:00 PM); // should book from malleshwaram.
rent_vehicle(‘suv’, 20th Feb 10:00 PM, 20th Feb 12:00 PM); // should book from koramangala.
rent_vehicle(‘suv’, 20th Feb 10:00 PM, 20th Feb 12:00 PM); //Should fail saying no vehicle.
print_system_view_for_time_slot(20th Feb 11:00 PM, 20th Feb 12:00 PM):
Output:
‘Koramangala’: 
All “suv” are booked.
“sedan” is available for Rs.10
“bike” is available for Rs.20
‘Jayanagar’:
“sedan” is available for Rs.11
“bike” is available for Rs.30
“hatchback” is available for Rs.8
‘‘Malleshwaram’’:
All “suv” are booked.
“bike” is available for Rs.3
“sedan” is available for Rs.10




### Entities

Branch{
	id: String
	location : String
	vehicleMap: Map<Vehicle, count>, 
	spoc : String,
	contact : String
}

Vehicle{
    id: String
    name : String
	pricePerHour: Amount
	model: String
	avaialabilityStatus: ['BOOKED' , 'AVAILABLE']
	branchId : String, 
	vehicleType : ['SUV' , 'SEDAN' , 'BIKE']
}

User{
	id : String, 
	name : String, 
	latitude : 
	longitude :  
}

Booking{
	id : String, 
	vehcileId : String,
	userId : String,
	timestamp 
}







### APIs 

1 . add_branch(‘koramangala’, [“1 suv for Rs.12 per hour”, “3 sedan for Rs.10 per hour”, “3 bikes for Rs.20 per hour”]); 

2. add_vehicle(‘koramangala’,  “1 sedan”); //add 1 sedan to koramangala
3. rent_vehicle(‘suv’, 20th Feb 10:00 PM, 20th Feb 12:00 PM); // should book from koramangala
4. print_system_view_for_time_slot(20th Feb 11:00 PM, 20th Feb 12:00 PM)






### Edge cases : 


1. While booking a vehicle, if 2 branches are providing a vehicle at the same price, give priority to the nearest branch. (Take user Location , Add Location info in branch)

2.  While booking a vehicle if availability is not there, then it should fallback to another available branch, which is derived based on the vehicle selection strategy.


### Design Decisions 

1. Add Current Booking List in Vehicle (when vehicle is UnAvailable currently , but will be free in future required time slot)?

isAvailable()  || isAvailable(timeSlot)

2. TimeSeries DB needed or overkill?










