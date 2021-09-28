import { combineReducers } from "redux";

import feedbackReducer from "./feedbackReducer";
import diagnosisReducer from "./diagnosisReducer";
import recommendationReducer from "./recommendationReducer";

const reducers = combineReducers({
    generalFeedback: feedbackReducer,
    diagnosisFeedback: diagnosisReducer,
    recommendation: recommendationReducer
})

export default reducers;