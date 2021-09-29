import {useHistory, Route} from 'react-router-dom';
import { useSelector } from "react-redux";

const Submission = () => {
        const history = useHistory();
        const state = useSelector(state => state)
        const submitPatientInfo = () => {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    diagnosisFeedback: state.diagnosisFeedback,
                    generalFeedback: state.generalFeedback,
                    recommendation: state.recommendation
                })
              };
              fetch("http://localhost:3001/recordResponse", requestOptions)
                .then(response => response.json())
                .then(res => console.log(res));
        };

        return (
            <div>
                <h1>Review your provided information below </h1>
                <ul>
                    <li>diagnosis feedback: {state.diagnosisFeedback} <br /> <button onClick={() => {history.push({
                        pathname: "/diagnosisFeedback",
                        state: {readyToSubmit: true}
                    })}}> Change Diagnosis Feedback </button>
                    </li>
                    <li>general feedback: {state.generalFeedback} <br /> 
                    <button onClick={() => {history.push({
                        pathname: "/generalFeedback",
                        state: {readyToSubmit: true}
                    })}}> Change General Feedback </button>
                    </li>
                    <li>recommendation: {state.recommendation} <br /><button onClick={() => {history.push({
                        pathname: "/recommend",
                        state: {readyToSubmit: true}
                    })}}> Change Recommendation 
                    </button>
                    </li>
                </ul>
               <button onClick={() => submitPatientInfo()}>Submit Patient Info</button>
            </div> 

         )
        }
export default Submission;