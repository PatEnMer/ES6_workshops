let obj = {
	firstName: 'Pieter',
	lastName: 'Rurski'
	// position: 'szef'
};

let { firstName: fName, lastName, position = 'hakier' } = obj;

console.log(`Przedstawiam ${fName} ${lastName} i pracuje on na stanowisku ${position}.`);

let numbers = [ 11, 12, 13, 43, 24, 32 ];

let [ first, , third, ...rest ] = numbers;

console.log(`Pierwsza wartość tablicy to ${first}, a trzecia ${third}.`);
console.log(`Pozostałe wartości to ${JSON.stringify(rest)}.`);

function sayHello({ firstName: fName, lastName }) {
	return `Witaj, Nazywam się ${fName} ${lastName}`;
}

console.log(sayHello({ firstName: 'Pat', lastName: 'En' }));
