//3)Write a “person” class to hold all the details.
//question 3 - class Person
class Person {
  constructor(name, gender, DOB) {
    this.personName = name;
    this.personGender = gender;
    this.personDob = DOB;
    this.personAge = 25;//if age not given default value is 25
  }

  calculateAge(currentYear) {
    let yearOfDob = this.personDob.slice(6);
    yearOfDob = +yearOfDob;
    let age = currentYear - yearOfDob;
    this.personAge = age;//setting class property with calculated age
    console.log(`age of the person is ${age}`);
    return age;
  }

  eligibilityToVote() {
    if (this.personAge >= 18) {
      console.log(`this person with age ${this.personAge} is eligible to vote`);
    } else {
      console.log(
        `this person with age ${this.personAge} is not eligible to vote`
      );
    }
  }

  getAJob(haveADegree) {
    if (haveADegree == "Y") {
      console.log("you must get a job as you have a degree");
    } else {
      console.log("you must acquire a degree first and try to get a job");
    }
  }

  getACar() {
    let driversLicense = prompt(
      "please say whether you have a drivers license Y or N"
    );//using prompt to take input from user
    if (this.personAge > 18 && driversLicense == "Y") {
      console.log(
        `as your age is ${this.personAge} greater than 18 and you have a drivers license you can buy a car.`
      );
    } else if (this.personAge < 18) {
      console.log("you are not upto age to get a drivers license.");
    } else {
      console.log(`please get a licemse first`);
    }
  }
}

const person1 = new Person("John Doe", "M", "25-01-1998");

const date = new Date();
let currentYear = date.getFullYear();

person1.calculateAge(currentYear);

person1.eligibilityToVote();

let doYouHaveADegree = prompt("please say whether you have a degree Y or N");
person1.getAJob(doYouHaveADegree);

person1.getACar();

