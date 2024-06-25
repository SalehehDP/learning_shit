//Primitive
// make new string throw away , you can't edit existing value

//Reference
// objects in js are so_called reference value => the address of array is stord
// use push : look at the addres and push new value to existing array and the addres value won't change
const num = [1, 2, 3];
num.push(4); // num is const but we can do push and pull and .... => editing the value that is behinde that address
// but you can't
//num = [];  // => overwritten constant value
