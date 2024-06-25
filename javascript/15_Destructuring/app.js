// Array
const userName = ["Max", "Amini"];
//const firstName = userName[0];
//const lastName = userName[1];

const [fisrtName, lastName] = ["Max", "Amini"]; //easy syntax to use for shortened
// pull out bu position

console.log(fisrtName);

//Object

// const user = {
//   age: 50,
//   name: "azam",
// };
// const name = user.name;
// const age = user.age;

const { age, name } = {
  age: 50,
  name: "azam",
}; // name should be same as proptosis name in objects
// pullout by key name ...

//diffrents name
const { age: yearsLiveInErath, name: firstName } = {
  age: 50,
  name: "azam",
}; // name should be same as proptosis name in objects
// pullout by key name ...
console.log(firstName);

//function parameter lists
/*The destructuring syntax explained in the previous lecture can also be used in function parameter lists.

For example, if a function accepts a parameter that will contain an object it can be destructured to "pull out" the object properties and make them available as locally scoped variables (i.e., variables only available inside the function body).

Here's an example:
*/
function storeOrder(order) {
  localStorage.setItem("id", order.id);
  localStorage.setItem("currency", order.currency);
}
//Instead of accessing the order properties via the "dot notation" inside the storeOrder function body, you could use destructuring like this:

function storeOrder2({ id, currency }) {
  // destructuring
  localStorage.setItem("id", id);
  localStorage.setItem("currency", currency);
}
/*The destructuring syntax is the same as taught in the previous lecture - just without creating a constant or variable manually.

Instead, id and currency are "pulled out" of the incoming object (i.e., the object passed as an argument to storeOrder).

It's very important to understand, that storeOrder still only takes one parameter in this example! It does not accept two parameters. Instead, it's one single parameter - an object which then just is destructured internally.

The function would still be called like this:
*/
storeOrder({ id: 5, currency: "USD", amount: 15.99 }); // one argument / value!
