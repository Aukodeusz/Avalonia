const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const calculate = (a, b, operation, callback) => {
    setTimeout(() => {
      const result = operation === 'dodawanie' ? a + b : a * b;
      callback(result);
    }, 1000);
  };
  
  const main = async () => {
    const question = (q) => new Promise(resolve => readline.question(q, resolve));
  
    const a = parseFloat(await question('Podaj pierwszą liczbę: '));
    const b = parseFloat(await question('Podaj drugą liczbę: '));
    const operation = await question('Podaj rodzaj operacji (dodawanie, mnożenie): ');
    const method = await question('Podaj metodę obliczeń (callback, promise): ');
  
    if (method === 'callback') {
      calculate(a, b, operation, (result) => {
        console.log(`Wynik (callback): ${result}`);
        readline.close();
      });
    } else if (method === 'promise') {
      const calculateWithPromise = (a, b, operation) =>
        new Promise(resolve =>
          calculate(a, b, operation, resolve));
      const result = await calculateWithPromise(a, b, operation);
      console.log(`Wynik (promise): ${result}`);
      readline.close();
    }
  };
  
  main();
  