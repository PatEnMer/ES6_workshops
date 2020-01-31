(function() {
	for (let i = 0; i < 10; i++) {
		console.log(i);
	}
	// deklaracja zmiennej w pętli za pomocą let, pozwala uniknąć jej wykorzystania poza scopem
	console.log('i: ' + i);
})();
