function getData(url) {
	let data = {
		firstName: 'Janek',
		lastName: 'Poplątanek'
	};

	let p = new Promise(function(res, rej) {
		// res('cos respons');
		// rej('wywołanie catch');
		setTimeout(() => {
			if (Math.round(Math.random() * 10) > 5) {
				res({ url, data });
			} else {
				rej(new Error('wystąpił błąd'));
			}
		}, 1500);
	});

	return p;
}

const res = getData('http://example.com/json');

res
	.then((response) => {
		console.log(response);
		return response.data;
	})
	.then((data) => {
		console.log(data);
	})
	.catch((err) => {
		console.log(err.message);
	});
