/* Exercise 1
We have a simple object:

JAVASCRIPT
let user = {
  name: "John",
  years: 30
}
Write the destructuring assignment that reads:

name property into the variable name.
years property into the variable age.
isAdmin property into the variable isAdmin (false if absent) */

//DESTRUCTURING 

let user = {
    name: "John",
    years: 30
    
}

user.isAdmin = false;

let {name, age, isAdmin} = user;
console.log(user);




/* Exercise 2
Give the right name:

Create the variable with the name of our planet. How would you name such a variable?
Create the variable to store the name of the current visitor. How would you name that variable? */

var earth = "big"
var currentVisitorName = "Ricardo"




/* Exercise 3
Look at the code. What will be result of the call at the last line and why?

JAVASCRIPT
let phrase = "Hello"

if (true) {
  let user = "John";
  function sayHi() {
    alert(`${phrase}, ${user}`)
  }
}

sayHi() */

Hello, John -> Because true alone is always true so the action of giving the alert with phrase and user will always happen.Because




/* Exercise 4
Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.
 */

let user = {}
user.name = "John";
user.surname = "Smith";
user.name ="Pete";
delete user.name;

let {name, surname} = user;
console.log(user);




/* Exercise 5
Is it possible to change an object declared with const, how do you think and why?

JAVASCRIPT
const user = {
  name: "John"
}

// does it work?
user.name = "Pete" */

Yes it works. The code would  give error if change the whole structure, but if you change the value (user.name) it is fine.




/* 
Exercise 6
We have an object storing salaries of our team:

JAVASCRIPT
let salaries = {
  Fred: 100,
  Ted: 160,
  Ghaith: 130
}
Write a code to sum all salaries and store in the variable sum. If salaries is empty, then the result must be 0. */

//Loop through all salaries
//replace " " per 0
//Print sum of all salaries

function sum(obj) {
	return Object.keys(obj).reduce((sum,key)=>sum+parseFloat(obj[key]||0),0);
  }
  
  let salaries = {
    Fred: 100,
    Ted: 160,
    Ghaith: 130
  };
  
  console.log(`sum:${sum(salaries)}`);





/* Exercise 7
Rewrite this if using the ternary operator '?':

JAVASCRIPT
if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
} */

let a=1
let b=2
let sum = a+b
let result =  sum < 4 ? "Below" : "Over";
console.log (result);




/* Exercise 8
Rewrite if..else using multiple ternary operators '?'.

JAVASCRIPT
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
} */


let login = "Director"

let message = login == "Employee" ?  "Hello" : login == "Director" ? "Greetings" : login == '' ? "No login": "";
console.log(message)
