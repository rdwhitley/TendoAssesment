import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Route, BrowserRouter} from 'react-router-dom';
import data from './data/patient-feedback-raw-data.json';
import Recommendation from './Components/Recommendation';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Route exact path="/recommend" component={Recommendation}/> 
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
