function getPage() {
	console.log('Przekazuję numer strony');
	return 1;
}

function goToPage(url, page = getPage()) {
	console.log(`Pobieram dane z ${url}/${page}`);
}

goToPage('/products');

function add(x, y = x * 3) {
	return x + y;
}
console.log(add(2));
