const writeToFile = require('../methods/WriteToFile');

test('writes user repsonse data to JSON file', () => {
    let req = {
        body: {
          diagnosisFeedback: "The information given to me by the Dr was very informal.",
          reccomendation: 5,
          generalFeedback: "The overall process went very smooth and I look forward to coming back."
        }
    };
    expect(writeToFile(req)).toBe(true);
})