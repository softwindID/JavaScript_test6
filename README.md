Create Three Objects to Store Information About Cars:

First Object named mercedes with properties:

name - Mercedes
model - GL450
engine - 4.0
year - 2015
color - black
hp - 300
forSale - true
Second Object named bmw with properties:

name - BMW
model - X6
engine - 3.0
year - 2018
color - white
hp - 313
forSale - false
Third Object named audi with properties:

name - Audi
model - Q7
engine - 3.0
year - 2021
color - blue
hp - 249
forSale - true
Part 1
Create a Variable year and set it to the current year.

Add a carAge Property to each object, which will contain the age of the car. Compute it programmatically using the year variable.

Create a Variable names that will hold the names and models of the cars in a comma-separated string (based on the properties of the created objects by concatenating strings).

Create a Variable averageAge that will compute the average age of all 3 cars.

Create a Variable atLeastOneForSale that will store the result of whether at least one car is for sale, calculated using a logical operator based on the forSale property of all three objects.

Create a Variable allYoungerThanFive that will store the result of whether all cars are younger than 5 years, calculated using a logical operator and comparison operator based on all three car values.

Create a Variable atLeastOneHasLittleHp that will store the result of whether at least one car has less than 250 horsepower, calculated using logical operators based on all three horsepower values (i.e., whether at least one car has less than 250 hp).

Display each of these variables in an alert using the format alert('question - ' + variable);, so the result will be something like “Make and model of all cars - Mercedes GL450, BMW X6, Audi Q7”. After displaying all messages, check the correctness of the answers to the questions.
Part 2
Create a Variable car and assign it one of the previously created car objects (do not create a new object; use an existing one). For all subsequent points, use the car object.

If the Car is a Mercedes GL450, display the message "My favorite Mercedes!" on the screen. If the car's make and model are different, display the message "This is - " + the make and model of the car from the car object. For example, if car is assigned the bmw object, the screen should display "This is - BMW X6".

If the Car is New (0 years old), display the message "New car". If the car is less than or equal to 3 years old, display the message "Fresh car". Otherwise, display the message "This car is " + the car’s age, so the message would be "This car is 6 years old" (if the car is 6 years old).

Create a Variable consumption that is assigned one of the following values using a ternary operator:

"Fuel-guzzling car" if the engine size is more than 3.0
"Economical car" if the engine size is less than or equal to 3.0
Display this variable using alert after assigning the value. Note: Assign the string value to the variable based on the condition first, and only then display the variable with alert.
Create a Variable russianColor that is assigned the corresponding color name in Russian based on the color of the car (color property in the car object) using a switch statement:

black - черный
silver - серебристый
red - красный
white - белый
gray - серый
blue - синий
Otherwise, russianColor should contain "Unable to determine the car color".
Display the russianColor variable on the screen using alert. For example, if car.color was "black", then russianColor should be "черный".
Change the Object in the car Variable and check the correctness of the code.
