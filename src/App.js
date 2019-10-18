import React from 'react';

export default class App extends React.Component 
{
  // Fires when the user clicks the button
  // Grabs the data and sends it via HTTP "POST" request to Backend server using hardcoded port 
  sendDataToBackend()
  {
    let inputContents = document.getElementById("userInputField").value;
    console.log("Sending the following data: " + inputContents);

    fetch("http://localhost:5000/", {
      method: "post",
      headers: {
        "content-type": "text/plain"
      },
      body: inputContents
    });
  }

  // Returns the HTML (technically, JSX) that the component renders 
  render()
  {
    return (
      <div className="App">
        <input type="text" id="userInputField" placeholder="Input Text Here..."></input>
        <button id="sendNumberToBackend" onClick={this.sendDataToBackend}>Send Number To Backend</button>
      </div>
    );
  }  
}
