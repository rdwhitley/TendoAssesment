import {useHistory} from 'react-router-dom';
import { useSelector } from "react-redux";

const Submission = () => {
        const history = useHistory();
        const state = useSelector(state => state)
        console.log(state)
        return (
            <div>
               submission
            </div> 

        )
}

export default Submission;