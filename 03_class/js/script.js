class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	sayHello() {
		return 'Heja, mam nzywam się ' + this.firstName + ' ' + this.lastName;
	}
}

class Employee extends Person {
	constructor(firstName, lastName, position) {
		super(firstName, lastName);
		this.position = position;
	}

	introduce() {
		return this.sayHello() + ' i pracuję na stanowisku ' + this.position;
	}
}

let p = new Employee('Pieter', 'Pietrowicz', 'hakier');

console.log(p.introduce());
