let fs = require('fs');

const fpath = '../res/das.txt';

try
{
    //const data = fs.readFileSync(fpath, 'utf-8').replace(/(\r\n|\n|\r)/gm, "").trim(); 
    const data = fs.readFileSync(fpath, 'utf-8').replace(/\\n/g, "\\n");       
    console.log(JSON.stringify(data));
} catch(err) {
    console.log(`Error: ${err.stack}`);
}