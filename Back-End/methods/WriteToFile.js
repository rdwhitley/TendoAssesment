const fs = require('fs');

const writeToJSON = (userResponses = {}) => {
     
    try {
        let fileData,data;

        if(fs.existsSync('./userResponses.json')) {
            fileData = fs.readFileSync('./userResponses.json',
              {encoding:'utf8', flag:'r'});
        }
        
        if(fileData){
            let responseArr = JSON.parse(fileData);
            responseArr.push(userResponses);
            data = JSON.stringify(responseArr, null)
        } else {
            let responseArr = []
            responseArr.push(userResponses)
            data = JSON.stringify(responseArr, null)
        }
    
        // write file to disk
        fs.writeFileSync('./userResponses.json', data, 'utf8');
        result = true;
    
    } catch (err) {
        console.log(err)
        result = false;
    }
    
    return result
}

module.exports =  writeToJSON;
