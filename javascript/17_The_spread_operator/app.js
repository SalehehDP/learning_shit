// on array

const learnedNumbersInJapenes = ["ichi", "ni", "san"];
const newLearnedNumbers = ["yon", "go", "roku", "nana"];

const merage = [...learnedNumbersInJapenes, ...newLearnedNumbers]; //... => pullout all elements in array

//on object
const user = {
  name: "soraia",
  age: "1",
};

const adminUser = {
  isAdmin: True,
  ...user,
}; // ... => pull out all key and values
