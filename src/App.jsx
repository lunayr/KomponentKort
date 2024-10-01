import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./output.css";

import KortKomponent from "./KortKomponent";

function App() {
  return (
    <>
      <div className="komponentkort">
        <KortKomponent
          bild="https://picsum.photos/200"
          title="först kort"
          text="en kort text"
          button="Se mer"
        />

        <KortKomponent
          bild="https://picsum.photos/200"
          title="andra kort"
          text="en kort text"
          button="Se mer"
        />

        <KortKomponent
          bild="https://picsum.photos/200"
          title="tredje kort"
          text="en kort text"
          button="Se mer"
        />
      </div>
    </>
  );
}

export default App;
