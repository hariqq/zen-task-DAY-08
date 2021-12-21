//2)https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
//question 2- class Circle
class Circle {
  constructor(inputRadius = 1.0, inputColor = "red") {
    this.radius = inputRadius;//setting class properties with values from instance
    this.color = inputColor;
  }

  getRadius() {
    return this.radius;//to return the radius of the circle
  }

  setRadius(inputRadius) {
    this.radius = inputRadius;//to set the radius of the circle
  }

  getColor() {
    return this.color;//to get the color of the circle
  }

  setColor(inputColor) {
    this.color = inputColor;//to set the color of the circle
  }

  toString() {
    return `this is a circle with radius ${this.radius} and color ${this.color}`;
  }//to return a string with values of radius and color of the circle

  getArea() {
    return 3.14 * this.radius ** 2;//to return the area of the circle
  }

  getCircumference() {
    return 2 * 3.14 * this.radius;//to return the circumference of the circle
  }
}

const circle1 = new Circle();//creating 3 circles
const circle2 = new Circle(2);
const circle3 = new Circle(5, "yellow");

console.log(`radius of circle3 is: ${circle3.getRadius()}`);//displaying radius of circle3

circle1.setRadius(9);
console.log(`radius of circle1 is: ${circle1.getRadius()}`);//setting radius of circle1

console.log(`color of circle3 is: ${circle3.getColor()}`);//displaying color of circle3

circle2.setColor("blue");
console.log(`color of circle2 is: ${circle2.getColor()}`);//setting color of circle2

returnedString = circle3.toString();
console.log(returnedString);//returned string of circle3 information

returnedArea = circle2.getArea();
console.log(`area of circle2 is: ${returnedArea}`);//returned area of circle2

returnedCircumference = circle1.getCircumference();
console.log(`circumference of the circle1 is: ${returnedCircumference}`);//returned circumference of circle1
