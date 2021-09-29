import React, { useEffect } from 'react';
import './App.css';

function App() {

  let _window: any = window;

  const connect = async (iframe: any) => {
    const mpSdk = await _window.MP_SDK.connect(
      iframe, // Obtained earlier
      's5hk85hbnxx6x61zezs67wdcb', // Your SDK key
      '' // Unused but needs to be a valid string
    );
  }

  const onShowcaseConnect = (mpSdk: any) => {
    // start making calls on mpSdk as described in the reference docs
    console.log("onShowcaseConnect", mpSdk);
  }

  
  useEffect(() => {
    const iframe = document.getElementById('showcase-iframe');
  
    console.log(_window.MP_SDK);
    const isBrowser = typeof window !== "undefined"
    // connect the sdk; log an error and stop if there were any connection issues
    try {
      console.log("window", isBrowser);
      if (isBrowser) {
        onShowcaseConnect(connect(iframe));
      }
    } catch (e) {
      console.error(e);
    }
    return () => {

    }
  })



  return (
    <div className="App">
      <iframe
        width="853"
        height="480"
        src="https://my.matterport.com/show?m=XwRXFzf4ER8&play=1&applicationKey=s5hk85hbnxx6x61zezs67wdcb"
        allow="fullscreen; vr"
        id="showcase-iframe">
      </iframe>
    </div>
  );
}

export default App;
