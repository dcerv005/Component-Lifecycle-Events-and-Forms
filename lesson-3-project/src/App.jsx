import CharacterList from "./CharacterList";
import { Component, useState } from "react";
import CharacterDetails from "./CharacterDetail";

function App() {

  // const [selectedId, setSelectedId] = useState(null);

  // const handleCustomerSelect = (id) => {
  //   setSelectedId(id);
    

  // }
  

  return (
    <div>
      <CharacterList />
      
      
      {/* <CharacterDetails characterId= {selectedId}/> */}
    </div>
  )
}

export default App
