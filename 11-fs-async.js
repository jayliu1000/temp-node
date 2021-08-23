const { Console } = require('console');
const {readFile, writeFile} = require('fs');
console.log('Start');

// async readFile and writeFile are offloaded immediately, allowing the app to 
// run to the end immediately and the last console.log('Starting the next task')
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err){
       consolr.log(err)  
       return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err){
             console.log(err)
             return;
        }
        const second = result;
        writeFile(
            './content/result-async.txt', 
            `Here is the async result: ${first} ${second}`, 
            (err, result) => {
                if (err){
                    console.log(err);
                    return;
                }
            console.log('done with this task asynchronously')
            }
        )
    })
})
console.log('Starting the next task')