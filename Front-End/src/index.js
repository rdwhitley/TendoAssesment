import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Route, BrowserRouter} from 'react-router-dom';
import Recommendation from './Components/Recommendation';
import DiagnosisFeedback from "./Components/diagnosisFeedback";
import GeneralFeedBack from "./Components/generalFeedback";
import Submission from './Components/Submission';
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path='/' component={App} />
      <Route exact path="/recommend" component={Recommendation}/> 
      <Route exact path="/diagnosisFeedback" component={DiagnosisFeedback} />
      <Route exact path="/generalFeedback" component={GeneralFeedBack} />
      <Route exact path="/submission" component={Submission} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
