import React, {useState} from "react";
import { bindActionCreators } from 'redux';
import { actionCreators } from "../store/index";
import {useHistory} from 'react-router-dom';
import { useDispatch } from "react-redux";
import getDiagnosis from "../methods/getDiagnosis";
import getDrName from "../methods/getDrName";
import './Component_Assets/main.css';
const DiagnosisFeedback = (props) => {
        let readyToSubmit;
        if(props.location.state) {
            readyToSubmit = true;
        }
        const dispatch = useDispatch()
        const {giveDiagnosis} = bindActionCreators(actionCreators,dispatch);
        const history = useHistory();
        const [feedbackValue, setFeedback] = useState(false);
        return (
            <section class='grid'>
                <div>
                    <label>Thank you. You were diagnosed with <span className="important"> {getDiagnosis()}</span>. Did <span className="important">Dr. {getDrName()}</span> explain how to manage this diagnosis in a way you could understand?</label>
                </div>

                <div>
                <select id='hadFeedback' onChange={() => {
                    const value = document.querySelector('#hadFeedback').value;
                    if(value == '1') {
                        setFeedback(true)
                    } else {
                        setFeedback(false)
                    }
                    console.log(feedbackValue)
                }}>
                    <option disabled selected value='none'> -- select an option -- </option>
                    <option value='0'>Yes</option>
                    <option value='1'>No</option>
                </select>
                {feedbackValue === false || document.querySelector('#hadFeedback') === 'none'
                ? 
                  <div>
                    <button className="btn" onClick={() => {
                        giveDiagnosis("The diagnosis was explained very thoroughly.")
                        readyToSubmit ? history.push('/submission') : history.push('/generalFeedback')
                    }} > Submit </button>
            
                  </div>
                : <div> 
                     <label>Please Enter Any Additional Feedback Below</label>
                    <br/>
                    <textarea id="feedback" rows="4" cols="50" />
                    <br />
                    <button className="btn" onClick={() => {
                        const feedback = document.querySelector('#feedback').value;
                        giveDiagnosis(feedback)
                        readyToSubmit ? history.push('/submission') : history.push('/generalFeedback')
                    }} > Submit </button>
                 </div>
                }
                 </div>
            </section>
        )
}

export default DiagnosisFeedback;