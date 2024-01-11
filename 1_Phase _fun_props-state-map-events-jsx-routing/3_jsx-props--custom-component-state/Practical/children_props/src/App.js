import logo from './logo.svg';
import './App.css';
import ChildComponent from './ChildComponent';

function App() {
  return (
    <div style={{backgroundColor:"blue",padding:"20px"}}>
      <ChildComponent>
         <p style={{backgroundColor:"red",padding:"10px"}}>
             This paragraph will show up in child. From parent
         </p>
      </ChildComponent>
    </div>
  );
}

export default App;
