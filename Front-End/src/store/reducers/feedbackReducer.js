const feedbackReducer = (state = "", action) => {
    switch(action.type){
        case "feedback":
            return action.payload;
        default:
            return state;
    }
}

export default feedbackReducer;