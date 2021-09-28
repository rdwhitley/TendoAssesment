import React, {useState} from "react";
import { bindActionCreators } from 'redux';
import { actionCreators } from "../store/index";
import {useHistory} from 'react-router-dom';
import { useDispatch } from "react-redux";
import getDiagnosis from "../methods/getDiagnosis";
import getDrName from "../methods/getDrName";

const DiagnosisFeedback = () => {
        const dispatch = useDispatch()
        const {giveDiagnosis} = bindActionCreators(actionCreators,dispatch);
        const history = useHistory();
        const [feedbackValue, setFeedback] = useState(false);
        return (
            <div>
                <label>Thank you. You were diagnosed with {getDiagnosis()}. Did Dr. {getDrName()} explain how to manage this diagnosis in a way you could understand?</label>
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
                    }} > Submit </button>
                
                  </div>
                :  
                    <div>
                    <button onClick={() => {
                        const feedback = document.querySelector('#feedback').value;
                    }} > Submit 
                    </button>
                    </div>
                }
            </div>
        )
}

export default DiagnosisFeedback;