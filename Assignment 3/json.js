// Converting a JSON object to javaScript
const jsonStr = '{"greeting":"hello"}';
const aPlainObj = JSON.parse(jsonStr);
console.log(aPlainObj);
aPlainObj.greeting = 'Assalam O Alakium';
console.log(aPlainObj);

// Converting a JavaScript object to JSON
const data = {
    firstName: "Taha",
    lastName: "Naseem",
    greeting: "Assalam O Alakium"
}
console.log(JSON.stringify(data));

// It's important to remember that while plain JavaScript objects can hold functions, JSON strings cannot.
// Another limitation is that valid JSON doesn't allow the use of JavaScript comments.
// When you stringfy a JavaScript object containing a method, that method will be excluded from the stringfy operation.