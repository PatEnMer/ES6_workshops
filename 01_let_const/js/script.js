(function() {
	var name;
	console.log(name);
	var name = 'Pat';
	// zmienna utworzona przez var jest hoistowana na górę, bez wartości przypisanej, a tym samym uważana za utworzną na początku, lecz nie zdefiniowaną
	console.log(name);
})();
