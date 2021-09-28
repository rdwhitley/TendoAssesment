const recommendationReducer = (state = 0, action) => {
    switch(action.type){
        case "recommend":
            return action.payload;
        default:
            return state;
    }
}

export default recommendationReducer;