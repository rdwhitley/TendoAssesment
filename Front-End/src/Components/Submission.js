import {useHistory, Route} from 'react-router-dom';
import { useSelector } from "react-redux";
import "./Component_Assets/main.css";
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
              fetch("http://54.152.165.85:3001/recordResponse", requestOptions)
                .then(response => response.json())
                .then(res => {
                    let submit = document.querySelector('#patient-submit');
                    submit.innerText = "Submitted";
                    setTimeout(() => {
                        history.push('/')
                    }, 2000);
                })
                .catch(err => console.log(err))
        };

        return (
            <div>
                <h1 style={{textAlign: "center"}}>Review your provided information below </h1>
                <section class='grid'>
                    <ul style={{listStyleType: "none"}}>
                        <li><span className="secondary-important">Diagnosis feedback:</span> {state.diagnosisFeedback} <br /> <button className="secondary-btn" onClick={() => {history.push({
                            pathname: "/diagnosisFeedback",
                            state: {readyToSubmit: true}
                        })}}> Change Diagnosis Feedback </button>
                        </li>
                        <li><span className="secondary-important">General feedback:</span> {state.generalFeedback} <br /> 
                        <button className="secondary-btn" onClick={() => {history.push({
                            pathname: "/generalFeedback",
                            state: {readyToSubmit: true}
                        })}}> Change General Feedback </button>
                        </li>
                        <li><span className="secondary-important">Your Recommendation: </span> {state.recommendation} <br /><button className="secondary-btn" onClick={() => {history.push({
                            pathname: "/recommend",
                            state: {readyToSubmit: true}
                        })}}> Change Recommendation 
                        </button>
                        </li>
                    </ul>
                <button id='patient-submit'className="btn" onClick={() => submitPatientInfo()}>Submit Patient Info</button>
                </section> 
            </div>

         )
        }
export default Submission;