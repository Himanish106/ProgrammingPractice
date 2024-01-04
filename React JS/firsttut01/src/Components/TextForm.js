import React, { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("");
  //   text="Enter your text" ---> Wrong way to change state
  //   setText("Enter your text") ---> Right way to change state
  const upperCaseClick = () => {
    // setText("Enter the text to change state");
    setText(text.toUpperCase());
    props.showAlert("Converted to UpperCase!","success")
  };
  const lowerCaseClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to LowerCase!","success")
  };
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const calculateWordCount = () => {
    if (text.trim() === "") {
      return 0;
    }
    return text.split(/\s+/).filter((word) => word !== "").length;
  };
  const speak = () => {
    const toggle = document.getElementById("toggle");

    if (toggle.textContent === "Speak") {
      toggle.innerHTML = "Stop";

      const readText = () => {
        let msg = new SpeechSynthesisUtterance(text);

        // Attach an event listener to restart speech when it ends
        msg.addEventListener('end', readText);

        window.speechSynthesis.speak(msg);      
      };

      // Start reading for the first time
      readText();
    } else {
      toggle.innerHTML = "Speak";
      // Stop speech synthesis
      window.speechSynthesis.cancel();
      props.showAlert("Speaking Stopped!","danger")
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="mt-3">{props.heading}</h1>
        <div className="mb-3 mt-3">
          <label htmlFor="my-text" className="form-label">
            Please Write here
          </label>
          <textarea
            className="form-control"
            id="my-text"
            placeholder="Enter your text here"
            value={text}
            rows={8}
            onChange={handleOnChange}
            style={{ backgroundColor: props.mode === 'dark' ? '#e3e2de' : 'white' }}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary btn-dark mx-2 my-2"
          onClick={upperCaseClick}
        >
          Convert to UpperCase
        </button>
        <button
          type="button"
          className="btn btn-primary btn-success mx-2 my-2"
          onClick={lowerCaseClick}
        >
          Convert to LowerCase
        </button>
        <button
          type="submit"
          onClick={speak}
          className="btn btn-warning mx-2 my-2"
          id="toggle"
        >
          Speak
        </button>
      </div>
      <div className="container mt-3">
        <h2>Your text Summary</h2>
        <p>
          {calculateWordCount()} words and {text.replace(/\s/g, '').length} characters
        </p>
        <p>
          Minimum minutes to read this:{" "}
          {(0.008 * calculateWordCount()).toFixed(2)}
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter Something in the textbox above to preview"}</p>
      </div>
    </>
  );
}
