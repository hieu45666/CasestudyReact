import './App.css';
import  {useState, useEffect} from 'react';
import Home from './component/mainComponent/Home';
import 'bootstrap/dist/css/bootstrap.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './redux/rootReducer/rootReducer';
import LoginForm from './component/mainComponent/LoginForm';

const store = createStore(rootReducer)
function App() {
  const [log,setLog] = useState(false);

  let change = () => {
    setLog(true);
  }

  if (log)
  return (
    <div className="App">
      <Provider store={store}>
      <Home/>
    </Provider>
    </div>
  );
  else return (<LoginForm changeLoginStatus={change}/>);
}

export default App;
