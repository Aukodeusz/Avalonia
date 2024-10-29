const fs = require('fs');

const monitorDir = '6jobs';

fs.watch(monitorDir, (eventType, filename) => {
  if (filename) {
    const message = `Plik ${filename} został ${eventType}`;
    console.log(message);
    fs.appendFile('file-changes.log', message + '\n', (err) => {
      if (err) throw err;
    });
  }
});

console.log(`Monitorowanie zmian w katalogu: ${monitorDir}`);
