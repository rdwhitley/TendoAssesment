import { bindActionCreators } from 'redux';
import { actionCreators } from "../store/index";
import {useHistory} from 'react-router-dom';
import { useDispatch } from "react-redux"; 
const diagnosisFeedback = () => {
        const dispatch = useDispatch()
        const {giveDiagnosis} = bindActionCreators(actionCreators,dispatch);
        let history = useHistory();
        return (
            <div>

            </div>
        )
    )
}

export default diagnosisFeedback;