// let sayHello = () => 'Siema';

// let sayHello = (name) => {
// 	return 'Siema ' + name + '!';
// };

// console.log(sayHello('Pat'));

// var firstName = 'Pat';

// let person = {
// 	firstName: 'Tomek',
// 	lastName: 'Nowak',
// 	sayHello: () => this.firstName + ' ' + this.lastName
// };

// // w przypadku arrow function, słowo kluczowe this. kieruje na zmienne obiekt wyżej niż miejsce w którym zostały użyte. Nie posiadają one kontekstu this, oraz nie można go nadać

// console.log(person.sayHello());

let person = {
	firstName: 'Tomek',
	lastName: 'Nowak',
	sayHello: function() {
		setTimeout(() => {
			console.log(this.firstName + ' ' + this.lastName);
		}, 1000);
	}
};

person.sayHello();
