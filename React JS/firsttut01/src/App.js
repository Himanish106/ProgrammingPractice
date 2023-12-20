import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
function App() {
  // return <Navbar />; ---> Suppose if we want to reuse this navbar for a different website obviously some things need to be changed such as "name of the website" "about of the website" etc. So here the concept of props comes. props means properties. We can pass the required properties and accordingly the properties will change. Remember props are always read only.
  return (
  <Navbar pageTitle="TextUtils" about="About TextUtils" /> // Since in Navbar.js You have already set the type of the properties mentioned here as a string so if you provide any other data type other than string then you will get an error
  // <Navbar/> ---> Case to check for the default props
  );
}

export default App;
