// import logo from './logo.svg';
// import './App.css';

import { Header } from "./Components/Headers/Header";
import "./App.css"
import { LandingPage } from "./Components/LandingPage/LandingPage";
function App() {
  return (
    <div className="App">
      <Header/>   
      <LandingPage/>   
    </div>
  );
}

export default App;
