var bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true
}
var eagle1 = Object.create(bird);
console.log("Eagle1:",eagle1);
console.log("Eagle1 has wings:",eagle1.hasWings);
console.log("Eagle1 can fly:",eagle1.canFly);
console.log("Eagle1 has feathers:",eagle1.hasFeathers);

var eagle2 = Object.create(bird);
console.log("Eagle2 has wings:",eagle2.hasWings);
var penguin1 = Object.create(bird);
penguin1.canFly = false;
console.log("Penguin1 can fly:",penguin1.canFly);