import fs from 'fs';


fs.readFile('./notes.txt', 'utf-8', (error, data)=> {
    console.log(data);
})
fs.writeFile('./notes.pdf', 'hi is data from function', 'utf-8', (err)=> {
    if(err) {
        console.log(err);
        return 
    }
    console.log("Content updated successfully");
})

fs.unlink('./notes.pdf', (err) => {
    if(err) {
        console.log(err);
    }
})

// fs.unlink('./notes.xls', (err) => {
//     if(err) {
//         console.log(err);
//     }
// })

fs.rename('./notes.txt','renamedFile.txt', (err)=> {
    if(err) {
        console.log(err);
    }
})