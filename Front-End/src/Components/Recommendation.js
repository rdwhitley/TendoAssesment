import getPatientName from '../methods/patientName';
import getDrName from '../methods/getDrName';
import { bindActionCreators } from 'redux';
import { actionCreators } from "../store/index";
import {useHistory} from 'react-router-dom';
import { useDispatch } from "react-redux"; 
import './Component_Assets/main.css';
const Recommendation = (props) => {
        let readyToSubmit;
        if(props.location.state) {
            readyToSubmit = true;
        }
        const dispatch = useDispatch()
        const {giveRecommendation} = bindActionCreators(actionCreators,dispatch);
        let history = useHistory();
        return (
        <section class='grid'>
            <label>Hi <span className="important">{getPatientName()} </span>, on a scale of 1-10, would you recommend <span className="important">Dr. {getDrName()}</span> to a friend or family member? 1 = Would not recommend, 10 = Would strongly recommend</label>
            <div>
                <select id="recommendation">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            <br />
            <button className="btn"type='submit' onClick={() => {
                let value = document.querySelector('#recommendation').value;
                giveRecommendation(value)
                readyToSubmit ? history.push('/submission') : history.push('/diagnosisFeedback')
            }}>Submit</button>
            </div>
        </section>
    )
}

export default Recommendation;