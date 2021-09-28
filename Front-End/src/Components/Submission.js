import {useHistory} from 'react-router-dom';
import { useSelector } from "react-redux";

const Submission = () => {
        const history = useHistory();
        const state = useSelector(state => state)
        console.log(state)
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
               <button onClick={() => submitPatientInfo()}>Submit Patient Info</button>
            </div> 

         )
        }
export default Submission;