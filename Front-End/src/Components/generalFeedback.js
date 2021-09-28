import React, {useState} from "react";
import { bindActionCreators } from 'redux';
import { actionCreators } from "../store/index";
import {useHistory} from 'react-router-dom';
import { useDispatch } from "react-redux";
import getDiagnosis from "../methods/getDiagnosis";

const GeneralFeedBack = () => {
        const dispatch = useDispatch()
        const {giveFeedback} = bindActionCreators(actionCreators,dispatch);
        const history = useHistory();
        return (
            <div>
               <label>We appreciate the feedback, one last question: how do you feel about being diagnosed with {getDiagnosis()}?</label>
               <br />
               <textarea id="feedback" rows="4" cols="50" />
               <br />
               <button onClick={() => {
                   let feedback = document.querySelector('#feedback').value;
                   giveFeedback(feedback)
                   history.push('/submission')
               }}>Submit</button>
            </div> 

        )
}

export default GeneralFeedBack;