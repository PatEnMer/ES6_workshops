let firstName = 'Pioter';
let lastName = 'Pioterowski';

let greeting = `Hej, hej! Nazywam się ${firstName.toUpperCase()} ${lastName}.`;

console.log(greeting);

let html = `
    <h1>Heja!</h1>
    <h2>Nazywam się ${firstName} ${lastName}</h2>
    <p>a powyżej zostały wstawione wartości \${firstname} i \${lastName}</p>
`;

document.querySelector('#container').innerHTML = html;
