# Vehicle Renting System
New vehicle rental service called KarSvc


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










