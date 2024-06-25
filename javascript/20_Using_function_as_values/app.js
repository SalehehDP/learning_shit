function handleTimeout() {
  console.log("Time out!");
}

const handleTimeout2 = () => {
  console.log("Time out ... again!");
}; // store an arrow functionre created in an anoymous way in constant =>  make it non_anoymous

setTimeout(handleTimeout, 2000); // pass function name without () , if we pass function with () => get executed immediately , value will ber return value(if exist)
setTimeout(handleTimeout2, 4000);
setTimeout(() => {
  console.log("More timeing out ...");
}, 5000);

//your own  function with function as input value
function boring(anotherBoringFn) {
  anotherBoringFn();
}
