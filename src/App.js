import logo from './logo.svg';
import './App.css';
import Signin from './pages/signIn/signin';
import Signup from './pages/signUp/signup';
import TextField from "@mui/material/TextField";
import Header from './components/header/header';
import Takenoteone from './components/takenoteone/takenoteone';
// import Takenotetwo from './components/takenotetwo/takenotetwo';
import Dashboard from './pages/Dashboard/Dashboard';
import Router from './components/router/router';
import store from './components/redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      
        <Provider store = {store} >

        <Router />
         
        </Provider>
    </div>

  );
}


export default App;
