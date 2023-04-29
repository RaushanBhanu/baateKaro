import Button from './components/BlueButton';
import './styles/App.css';
import './styles/common.css';
import './styles/input.css'
import Login from './screens/Login.js';

function App() {
  const handleclick = () => {
    console.log("Button clicked")
  }
  return (
    <div className="App">
      {/* <h1 className=''>Hello</h1> */}
      {/* <Button text="Click Me" onClick={handleclick} /> */}
      <Login/>
    </div>
  );
}

export default App;
