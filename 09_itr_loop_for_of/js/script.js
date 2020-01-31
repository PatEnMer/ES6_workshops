let iterator = {
	[Symbol.iterator]() {
		let numbers = [ 2, 23, 123, 2, 23, 13 ],
			index = 0;
		return {
			next: function() {
				return {
					done: index === numbers.length ? true : false,
					value: numbers[index++]
				};
			}
		};
	}
};

for (let val of iterator) {
	console.log(val);
}

let arr = [ ...iterator ];

console.log(Math.max(...iterator));
