(function() {
	const a = 'ciąg znaków';
	// const podobnie jak let jest dostępny w konkretnym scope, oraz nie jest hoistowany, jest to zmienna-stała: oznacza to, że nie można jej nadpisać
	console.log(a);

	// a = 'zzz';

	const obj = {
		name: 'Pat'
	};

	// obj = 'zasea';

	obj.name = 'Pioter';
	// wartość zmiennej zawartej w const jest możliwa do zmiany, ale nie można przypisywać do zmienniej czegoś zupełnie nowego
	console.log(obj.name);
})();
