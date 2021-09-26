const writeToFile = require('../methods/WriteToFile');

test('writes user repsonse data to JSON file', () => {
    let user = {
        diagnosisFeedback: "",
        reccomendation: 5,
        generalFeedback: ""
    };
    expect(writeToFile(user)).toBe(true);
})