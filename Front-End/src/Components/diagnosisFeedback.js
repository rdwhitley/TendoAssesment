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
                    setFeedback(!feedbackValue)
                }}>
                    <option disabled selected value='none'> -- select an option -- </option>
                    <option value='1'>Yes</option>
                    <option value='0'>No</option>
                </select>
                {feedbackValue && document.querySelector('#hadFeedback') !== null
                ? 
                  <div>
                    <label>Please Enter Any Additional Feedback Below</label>
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
                    }} > Submit </button>
            
                 </div>
                }
            </div>
        )
}

export default DiagnosisFeedback;