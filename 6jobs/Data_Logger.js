const fs = require('fs').promises;
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

(async () => {
  const question = (q) => new Promise(resolve => readline.question(q, resolve));

  const imie = await question('Podaj imię: ');
  const nazwisko = await question('Podaj nazwisko: ');
  const wiek = await question('Podaj wiek: ');

  const userData = { imie, nazwisko, wiek };

  await fs.writeFile('dane.json', JSON.stringify(userData, null, 2));
  console.log('Dane zapisane do pliku dane.json');

  const fileData = JSON.parse(await fs.readFile('dane.json', 'utf8'));
  console.log('Odczytane dane:', fileData);

  readline.close();
})();
