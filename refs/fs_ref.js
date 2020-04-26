const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname,
//     'notes'),
//     err=>{if (err) throw new Error(err)})

fs.writeFile(path.join(__dirname,
    'notes','note.txt'),
    'Hello Max',
    err=>{if(err)throw err})

async function changeRead() {
    await fs.appendFile(
        path.join(__dirname,'notes','note.txt'),
        ' Successful',
        err=>{if(err)throw err})
    
    fs.readFile(
        path.join(__dirname,'notes','note.txt'),
        'utf-8',
        (err,data)=>{
            if(err)throw err
            console.log(data);
        }
    )
}changeRead()



