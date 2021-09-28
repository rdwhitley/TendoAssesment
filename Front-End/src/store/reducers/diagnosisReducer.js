const diagnosisReducer = (state = "", action) => {
    switch(action.type){
        case "explanation":
            return action.payload;
        default:
            return state;
    }
}

export default diagnosisReducer;