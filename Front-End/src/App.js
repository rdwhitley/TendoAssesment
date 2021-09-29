import './Components/Component_Assets/main.css';
import {useHistory} from 'react-router-dom';
function App() {
  const history = useHistory();
  return (
    <section className="grid">
      <aside>Welcome to Patient Response Recorder</aside>
      <button class='btn' onClick={() => history.push('/recommend')}>Start</button>
    </section>
  );
}

export default App;
