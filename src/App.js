import React from "react";

import Infobox from "./Infobox";

function App() {
  return (
    <div className="App">
      {/*calling infobox with 10 cards in main app, alternate would be to make card component, but 10 fixed so no need*/}
      <Infobox />
    </div>
  );
}

export default App;
