import './App.css';

import qrCodeImage from './img/image-qr-code.png'

function App() {
  return (
    <div className="App">
      <div className="qrContainer">
        <img src={qrCodeImage}></img>
      </div>
      <h1>5Improve your front-end skills by building projects</h1>
      <p>Scan the QR code to visit Frontend Mentor and take
         your coding skills to the next level</p>
    </div>
  );
}

export default App;
