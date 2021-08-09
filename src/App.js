
import './App.css';
//import {Form} from "react-bootstrap"
import Taha from './comoponent/Taha';
function App() {
const mystyle ={
  backgroundColor : 
  'wheat'
}
  return (
    <div className="App" style={mystyle}>
     <h1>Introduction to ReactJs</h1>
     <Taha/>
     <Taha/>
    </div>
  );
}

export default App;
