const fs = require('fs');
const readline = require('readline');

const infile = 'words.txt'
const outfile = 'words.js'

async function processLineByLine() {
  const fileStream = fs.createReadStream(infile);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
	const out = fs.createWriteStream(outfile, { flags : 'a' });

	out.write(`const WORDS = [\r\n`, 'utf-8');

	let i = 1;
  for await (const line of rl) {
		out.write(`\t'${line.toUpperCase()}',\r\n`, 'utf-8');
		process.stdout.clearLine(0);
		process.stdout.cursorTo(0);
		process.stdout.write(`Completed ${i++} lines: ${line.length <= 9 ? line : ''}`);
	}
	
	out.write(`];`);
}

processLineByLine();
