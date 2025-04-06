const fs = require('fs').promises;

const readFile = async()=>{
    try{
        const data = await fs.readFile('file.txt','utf8')
        const data2 = await fs.readFile('data.txt','utf8')
        console.log(data)
        console.log(data2)
    }
    catch(err)
    {
        console.error(err);
    }
}

readFile()