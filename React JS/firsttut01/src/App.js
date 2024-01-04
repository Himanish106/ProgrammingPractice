import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import { useState } from "react";
import Alert from "./Components/Alert";
import About from "./Components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  // return <Navbar />; ---> Suppose if we want to reuse this navbar for a different website obviously some things need to be changed such as "name of the website" "about of the website" etc. So here the concept of props comes. props means properties. We can pass the required properties and accordingly the properties will change. Remember props are always read only.
  // const navbar = document.getElementById("navbar");
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [blueModeChecked, setBlueModeChecked] = useState(false);
  const [greenModeChecked, setGreenModeChecked] = useState(false);
  const [darkModeChecked, setDarkModeChecked] = useState(false);
  const handleCheckboxChange = (diffMode) => {
    if (diffMode === "blue") {
      setGreenModeChecked(false);
      setDarkModeChecked(false);
      if (blueModeChecked) {
        setMode('light')
        setBlueModeChecked(false);
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        showAlert("Blue Mode has been disabled", "success");
      }
      else {
        setBlueModeChecked(true)
        setMode('Blue')
        document.body.style.backgroundColor = "#46509c";
        document.body.style.color = "white";
        showAlert("Blue Mode has been enabled", "success");
      }
    } else if (diffMode === "green") {
      setBlueModeChecked(false);
      setDarkModeChecked(false);
      if (greenModeChecked) {
        setMode('light')
        setGreenModeChecked(false);
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        showAlert("Green Mode has been disabled", "success");
      } else {
        setGreenModeChecked(true);
        setMode('Success')
        document.body.style.backgroundColor = "#568f5a";
        document.body.style.color = "white";
        showAlert("Green Mode has been enabled", "success");
      }
    } else if (diffMode === "dark") {
      setBlueModeChecked(false);
      setGreenModeChecked(false);
      if (darkModeChecked) {
        setMode('light')
        setDarkModeChecked(false);
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        showAlert("Dark Mode has been disabled", "success");
      } else {
        setDarkModeChecked(true);
        document.body.style.backgroundColor = "#52514f";
        document.body.style.color = "#e6e4e1";
        showAlert("Dark Mode has been enabled", "success");
        setMode('dark')
      }
    } else {
      setBlueModeChecked(false);
      setGreenModeChecked(false);
      setDarkModeChecked(false);
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode has been enabled", "success");
    }
  };
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1400);
  };
  // const toggleMode = () => {
  //   if (mode === 'light') {
  //     setMode('dark')
  //     document.body.style.backgroundColor = "#52514f"
  //     document.body.style.color = "#e6e4e1"
  //     showAlert('Dark Mode has been enabled', 'success')
  //   }
  //   else {
  //     setMode('light')
  //     document.body.style.backgroundColor = "white"
  //     document.body.style.color = "black"
  //     showAlert('Light Mode has been enabled', 'success')
  //   }
  //   setBlueModeChecked(false);
  //   setGreenModeChecked(false);
  // }
  return (
    <>
      {/* <Navbar pageTitle="TextUtils" about="About TextUtils" /> */}
      {/* // Since in Navbar.js You have already set the type of the properties mentioned here as a string so if you provide any other data type other than string then you will get an error
  // <Navbar/> ---> Case to check for the default props */}
      <BrowserRouter>
      <Navbar
        pageTitle="TextUtils"
        blue={blueModeChecked}
        green={greenModeChecked}
        dark={darkModeChecked}
        isCheck={handleCheckboxChange}
        mode={mode}
      />
      <Alert alert={alert} />
      <div className="container">
          <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text to analyze below" mode={mode} />} />
          <Route exact path="/about" element={<About mode={mode}/>} />
          </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
