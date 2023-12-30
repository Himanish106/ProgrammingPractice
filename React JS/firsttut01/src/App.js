import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import { useState } from "react";
import Alert from "./Components/Alert";
// import About from "./Components/About";
function App() {
  // return <Navbar />; ---> Suppose if we want to reuse this navbar for a different website obviously some things need to be changed such as "name of the website" "about of the website" etc. So here the concept of props comes. props means properties. We can pass the required properties and accordingly the properties will change. Remember props are always read only.
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1400)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#52514f"
      document.body.style.color = "#e6e4e1"
      showAlert('Dark Mode has been enabled', 'success')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      showAlert('Light Mode has been enabled', 'success')
    }
  }
  return (
    <>
      {/* <Navbar pageTitle="TextUtils" about="About TextUtils" /> */}
      {/* // Since in Navbar.js You have already set the type of the properties mentioned here as a string so if you provide any other data type other than string then you will get an error
  // <Navbar/> ---> Case to check for the default props */}
      <Navbar pageTitle="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <TextForm heading="Enter your text to analyze below" mode={mode} showAlert={showAlert} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
