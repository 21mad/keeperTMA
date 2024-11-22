import { useEffect, useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import WebApp from '@twa-dev/sdk';

function App() {
  // const [count, setCount] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  return (
    <div>
      <h1>Just a chill guy</h1>
      <video ref={videoRef} autoPlay loop muted={muted} id="chill-guy">
        <source src='chill.mp4' type="video/mp4" />
      </video>
      <br/>
      <button onClick={() => setMuted(!muted)}>{muted ? 'Unmute' : 'Mute'}</button>
    </div>
  );

  // return (
  //   <div>
  //     <video ref={videoRef} loop controls id="chill-guy">
  //       <source src="/assets/chill.mp4" type="video/mp4" />
  //     </video>
  //     <button onClick={playVideo}>Play with sound</button>
  //   </div>
  // );

  // return (
  //   <>
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         Count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <div className="card">
  //       <button
  //         onClick={() =>
  //           WebApp.showAlert(`Hello World! Current count is ${count}`)
  //         }
  //       >
  //         Show Alert
  //       </button>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // );
}

export default App;
