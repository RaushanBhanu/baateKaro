import Button from './components/BlueButton';
import './styles/App.css';
import './styles/common.css';
import './styles/input.css'
import Login from './screens/Login.js';
import LoginPage from './screens/LoginPage';
function App() {
  const handleclick = () => {
    console.log("Button clicked")
  }
  return (
    <div className="App">
      {/* <h1 className=''>Hello</h1> */}
      {/* <Button text="Click Me" onClick={handleclick} /> */}
      {/* <Login/> */}
      <LoginPage/>
    </div>
  );
}

export default App;
