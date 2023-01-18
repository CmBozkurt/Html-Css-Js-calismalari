// let Person = function (name, yearOfBirth) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
// };

// Person.prototype.calculateAge = function () {
//   return 2022 - this.yearOfBirth;
// };

// let Engineer = function (name, yearOfBirth, phoneNumber) {
//   Person.call(this, name, yearOfBirth);
//   this.phoneNumber = phoneNumber;
// };

// Engineer.prototype = Object.create(Person.prototype);

// let mahmut = new Engineer("Mahmut", 1993, 5666744678);

// console.log(mahmut);
// console.log(mahmut.calculateAge());

// var str1 = "Mahmut";
// var str2 = new String("Mahmut");

// console.log(str1);
// console.log(str2);

// var num1 = 12;
// var num2 = new Number(num1);

// console.log(num1);
// console.log(num2);

// var bool1 = false;
// var bool2 = new Boolean(true);

// console.log(bool1);
// console.log(bool2);

// console.log(typeof str1);
// console.log(typeof str2);
// console.log(typeof num1);
// console.log(typeof num2);
// console.log(typeof bool1);
// console.log(typeof bool2);

let obj = {
  category: "person",
  names: ["mahmut", "hüseyin", "tülay"],
  call: function () {
    this.names.map((name) => {
      console.log(this.category, name);
    });
  },
};

obj.call();
