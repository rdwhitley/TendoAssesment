import {useHistory} from 'react-router-dom';
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
                    <li>diagnosis feedback: {state.diagnosisFeedback} <br /> <span> Change Diagnosis Feedback </span></li>
                    <li>general feedback: {state.generalFeedback} <br /> <span> Change General Feedbackk </span></li>
                    <li>recommendation: {state.recommendation} <br /><span> Change Recommendation </span></li>
                </ul>
               <button onClick={() => submitPatientInfo()}>Submit Patient Info</button>
            </div> 

         )
        }
export default Submission;