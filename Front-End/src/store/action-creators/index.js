import { store } from "../store";
export const giveRecommendation  = (total)=> {
    
      
    return (dispatch) => {
        return dispatch({
                type: "recommend",
                payload: total
            })
    }
}

export const giveFeedback = (feedback) => {
    return (dispatch) => {
        console.log('dispatching')
        dispatch({
            type: "feedback",
            payload: feedback
        })
    }
}

export const giveDiagnosis = (diagnosis) => {
    return (dispatch) => {
        dispatch({
            type: "explanation",
            payload: diagnosis
        })
    }
}

