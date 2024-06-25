// Array
const userName = ["Max", "Amini"];
//const firstName = userName[0];
//const lastName = userName[1];

const [fisrtName, lastName] = ["Max", "Amini"]; //easy syntax to use for shortened
// pull out bu position

consol.log(fisrtName);

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
consol.log(firstName);
