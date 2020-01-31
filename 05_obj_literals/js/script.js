let firstname = 'Pat',
	lastName = 'En';

let sayHelloFnName = 'say';

let person = {
	firstname,
	lastName,
	[sayHelloFnName + 'Hello']() {
		return `Hej, hej! Nazywam się ${this.firstname} ${this.lastName}.`;
	}
};

console.log(person.sayHello());
