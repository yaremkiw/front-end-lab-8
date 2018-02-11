var x = parseFloat(prompt("enter the rectangle of the triangle 1", ""));
var y = parseFloat(prompt("enter the rectangle of the triangle 2", ""));
var z = parseFloat(prompt("enter the rectangle of the triangle 3", ""));
var area = (x + y + z) / 2;      // all area
var result = Math.sqrt(area * (area - x) * (area - y) * (area - z));
var form;

if (x * x + y * y == z * z || x * x + z * z == y * y || z * z + y * y == x * x) {
	form = "right triangle";
} else if (x !== y && x !== z && y !== z) {
	form = "scalene triangle";
}
else if (x == y || x == z || y == z) {
	form = "isosceles triangle";
}
else if (x == y && y == z) {
	form = "equilateral triangle";
}
if (x <= 0 || y <= 0 || z <= 0 || result <= 0 || isNaN(result)) {
	console.log("Incorrect data");
}
else {
	console.log("Form of triangle is " + form + "and area is " + result.toFixed(2));
}