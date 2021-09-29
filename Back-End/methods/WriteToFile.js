const fs = require('fs');

const writeToJSON = (req,res) => {
        console.log(req.body);
    try {
        let fileData,data;

        const userResponses = {
            diagnosisFeedback: req.body.diagnosisFeedback,
            recommendation: req.body.recommendation,
            generalFeedback: req.body.generalFeedback
        }

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
    if(res) {
        res.json('Patient Response Recorded');
    }
    return result
}

module.exports =  writeToJSON;
