// rest
function addNumbers(log, ...numbers) {
	if (log) {
		console.log(numbers);
	}
	return numbers.reduce(function(prev, current) {
		return prev + current;
	});
}

// console.log(addNumbers(true, 4, 3, 6, 1, 2));

// spread
let numbers = [ 3, 5, 2, 1, 2, 8 ];

// console.log(Math.max(...numbers));

let numbers2 = [ 12, 23, 4532, 23, 13, 65 ];

let numbersJoined = [ ...numbers, ...numbers2, 90, 91 ];

console.log(numbersJoined);
