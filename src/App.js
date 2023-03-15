import './App.css';
import  { useEffect } from 'react';
import Home from './component/mainComponent/HomeAdmin';
import 'bootstrap/dist/css/bootstrap.css';
import { useSelector } from 'react-redux';
import Home1 from './component/NotSignUp/Home';
import HomeUser from './component/mainComponent/HomeUser';

function App() {
  const role = useSelector(state => state.DataUser.role);
  useEffect(() => {},[role]);

  if (role === "admin")
  return (
    <div className="App">
        <Home/>
    </div>
  ); else if (role === "user") 
  return (
    <div className="App">
      <HomeUser/>
      </div>
  )
  else return (<Home1/>);
}

export default App;
