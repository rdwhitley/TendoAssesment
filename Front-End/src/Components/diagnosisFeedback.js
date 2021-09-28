import React, {useState} from "react";
import { bindActionCreators } from 'redux';
import { actionCreators } from "../store/index";
import {useHistory} from 'react-router-dom';
import { useDispatch } from "react-redux";


const DiagnosisFeedback = () => {
        const dispatch = useDispatch()
        const {giveDiagnosis} = bindActionCreators(actionCreators,dispatch);
        const history = useHistory();
        const [feedbackValue, setFeedback] = useState(false);

        return (
            <div>
                <select id='hadFeedback' onChange={() => {
                    const value = document.querySelector('#hadFeedback');
                    setFeedback(!feedbackValue)
                }}>
                    <option disabled selected value> -- select an option -- </option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
                {feedbackValue 
                ? 
                  <div>
                    <label>Please Enter Feedback Below</label>
                    <br/>
                    <textarea id="feedback" rows="4" cols="50" />
                    <br />
                    <button onClick={() => {
                        const feedback = document.querySelector('#feedback').value;
                        console.log(feedback)
                    }} > Submit </button>
                
                  </div>
                : null
                }
            </div>
        )
}

export default DiagnosisFeedback;